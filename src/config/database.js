import pg from 'pg';
import dotenv from 'dotenv';
const { Pool } = pg;

dotenv.config();

let poolConfig = {
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
};

const pool = new Pool(poolConfig);

export default pool;