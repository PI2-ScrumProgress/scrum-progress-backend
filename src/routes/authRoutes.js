import express from 'express';
import { loginHandler, refreshHandler, logoutHandler } from '../controllers/authController.js';

const router = express.Router();

router.post('/login', loginHandler);
router.post('/refresh', refreshHandler);
router.post('/logout', logoutHandler);

export default router;
