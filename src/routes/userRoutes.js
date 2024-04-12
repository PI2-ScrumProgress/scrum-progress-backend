import express from 'express';
import pool from '../config/database.js';
import bcrypt from 'bcrypt';
import { authenticateToken } from '../middlewares/authMiddleware.js';


const router = express.Router();

router.get('/', authenticateToken, async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM users');
        res.json(result.rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.post('/create', async (req, res) => {
    const { name, email, password, points } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const result = await pool.query(
            'INSERT INTO users (name, email, password, points) VALUES ($1, $2, $3, $4) RETURNING *',
            [name, email, hashedPassword, points]
        );
        res.status(201).json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
);

export default router;