import express from 'express';
import pool from '../config/database.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { jwtTokens } from '../utils/jwtHelpers.js';

const router = express.Router();

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);

        if (result.rows.length === 0) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }

        const user = result.rows[0];
        const validPassword = await bcrypt.compare(password, user.password);

        if (!validPassword) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }

        let tokens = jwtTokens({ userId: user.id, username: user.username, email: user.email });

        res.cookie('refreshToken', tokens.refreshToken, { httpOnly: true, sameSite: 'none', secure: true });

        res.json(tokens);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.post('/refresh', (req, res) => {
    const token = req.cookies.refreshToken;

    if (token == null) {
        return res.sendStatus(401);
    }

    jwt.verify(token, process.env.REFRESH_TOKEN_SECRET, (error, user) => {
        if (error) {
            return res.sendStatus(403);
        }

        let tokens = jwtTokens({ userId: user.userId, username: user.username, email: user.email });

        res.cookie('refreshToken', tokens.refreshToken, { httpOnly: true, sameSite: 'none', secure: true });

        res.json(tokens);
    });
});

router.post('/logout', (req, res) => {
    res.clearCookie('refreshToken');
    res.sendStatus(204).json({ message: 'Logged out' });
});


export default router;