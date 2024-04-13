import express from 'express';
import { createUserStoryHandler, getUserStoriesHandler } from '../controllers/userStoryController.js';
import { authenticateToken } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/create', authenticateToken, createUserStoryHandler);
router.get('/', authenticateToken, getUserStoriesHandler);

export default router;