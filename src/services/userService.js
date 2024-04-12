import bcrypt from 'bcrypt';
import pool from '../config/database.js';

const createUser = async (userData) => {
    const { username, email, password, points } = userData;
    const hashedPassword = await bcrypt.hash(password, 10);
    const result = await pool.query(
        'INSERT INTO users (username, email, password, points) VALUES ($1, $2, $3, $4) RETURNING *',
        [username, email, hashedPassword, points]
    );
    return result.rows[0];
};

const getUsers = async () => {
    const result = await pool.query('SELECT * FROM users');
    return result.rows;
};

export { createUser, getUsers };
