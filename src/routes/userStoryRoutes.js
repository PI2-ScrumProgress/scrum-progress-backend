import express from "express";
import {
  createUserStoryHandler,
  getUserStoriesHandler,
} from "../controllers/userStoryController.js";
import { authenticateToken } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/create", createUserStoryHandler);
router.get("/", getUserStoriesHandler);

export default router;
