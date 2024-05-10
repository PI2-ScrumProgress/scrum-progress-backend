import express from "express";
import { getBacklogElementsHandler } from "../controllers/backlogElementsController.js";

const router = express.Router();

router.get("/", getBacklogElementsHandler);

export default router;
