const ApiError = require("../middleware/apiError");
const httpStatus = require("http-status");
const db = require("../config/dbConfig");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const createUser = async (user) => {
  let { name, mail, password } = user;
  try {
    const result = await db.query({
      text: `INSERT INTO "user" (name, mail, password) values ($1,$2, $3) RETURNING *`,
      values: [name, mail, password],
    });
    return result.rows[0];
  } catch (error) {
    throw new ApiError(
      "Error al registrar el usuario",
      httpStatus.UNPROCESSABLE_ENTITY
    );
  }
};

const login = async ({ mail, password }) => {
   user = await serachUser(mail);
  if (!user) {
    throw new ApiError("Credenciales inválidas", httpStatus.FORBIDDEN);
  }

  try {
    const { password: userPassword, ...payload } = user;
    const validPassowrd = await bcrypt.compare(password, userPassword);
    if (!validPassowrd) {
      throw new ApiError("Credenciales inválidas", httpStatus.FORBIDDEN);
    }
    const token = jwt.sign(payload, process.env.SECRET, {
      expiresIn: 60 * 60 * 24,
    });
    

    return { user: payload, token };
  } catch (err) {
    throw new ApiError("El usuario no existe", httpStatus.UNPROCESSABLE_ENTITY);
  }
};

const serachUser = async (mail) => {
  try {
    const result = await db.query({
      text: `SELECT * FROM "user" WHERE mail = $1`,
      values: [mail],
    });
    return result.rows[0];
  } catch (e) {
    throw new ApiError("El usuario no existe", httpStatus.UNPROCESSABLE_ENTITY);
  }
};

module.exports = { createUser, login };
