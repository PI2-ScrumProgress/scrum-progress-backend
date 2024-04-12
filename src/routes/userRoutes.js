import express from 'express';
import { getUsersHandler, createUserHandler } from '../controllers/userController.js';
import { authenticateToken } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.get('/', authenticateToken, getUsersHandler);
router.post('/create', createUserHandler);

export default router;