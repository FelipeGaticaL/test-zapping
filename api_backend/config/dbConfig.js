const { Pool } = require("pg");

const isProduction = process.env.NODE_ENV === "production";

const pool = isProduction ?
    new Pool({
        connectionString: process.env.DATABASE_URL,
        ssl: {
            rejectUnauthorized: false,
        },
    }) :
    new Pool({
        user: process.env.POSTGRES_USER,
        host: process.env.POSTGRES_HOST, 
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DB,
        port: 5432,
    });


    
module.exports = pool;