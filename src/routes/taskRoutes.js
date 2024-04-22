import express from "express";
import {
  createTaskHandler,
  getTasksHandler,
} from "../controllers/taskController.js";
import { authenticateToken } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/create", createTaskHandler);
router.get("/", authenticateToken, getTasksHandler);

export default router;
