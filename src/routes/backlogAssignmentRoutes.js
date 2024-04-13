import express from 'express';
import {
    assignBacklogElementHandler,
    getAssignedBacklogElementsHandler
} from "../controllers/backlogAssignmentController.js";
import { authenticateToken } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/assign', authenticateToken, assignBacklogElementHandler);
router.get('/:userId', authenticateToken, getAssignedBacklogElementsHandler);

export default router;