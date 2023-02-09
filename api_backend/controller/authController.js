const httpStatus = require('http-status');
const bcrypt = require("bcryptjs");
const authService = require("../services/authServices");

const createUser = async ( req, res, next ) => {
        try {
        //Validar los datos
        const user = req.body
        //Variables para encryptar la password
        const salt = 10
        //Encriptar la password
        const hash = bcrypt.hashSync(user.password, salt)
        user.password = hash
        await authService.createUser( user )
        res.status(httpStatus.OK).send({
            message: `Registro exitoso para Usuario ${user.firstName}`
        })
    } catch ( err ) {
        next( err );
    }
}

const login = async ( req, res, next ) => {
    try {
        const { mail, password } = req.body;
        const data = await authService.login({ mail, password })
        return res.status(httpStatus.OK).send( data )
    } catch ( err ) {
        next( err );
    }
}

module.exports = { createUser, login }
