import express from "express";
import {
  assignBacklogElementHandler,
  getAssignedBacklogElementsHandler,
} from "../controllers/backlogAssignmentController.js";
import { authenticateToken } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/assign", assignBacklogElementHandler);
router.get("/:userId", getAssignedBacklogElementsHandler);

export default router;
