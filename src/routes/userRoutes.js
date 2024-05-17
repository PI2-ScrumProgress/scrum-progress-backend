import express from "express";
import {
  getUsersHandler,
  createUserHandler,
  getUsersOrderedByPointsHandler,
} from "../controllers/userController.js";
import { authenticateToken } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/", getUsersHandler);
router.post("/create", createUserHandler);
router.get("/by-points", getUsersOrderedByPointsHandler);

export default router;
