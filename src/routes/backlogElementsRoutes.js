import express from "express";
import {
  getBacklogElementsHandler,
  assignBacklogElementHandler,
  getBacklogElementsAssignedToHandler,
} from "../controllers/backlogElementsController.js";

const router = express.Router();

router.get("/", getBacklogElementsHandler);
router.put("/assign", assignBacklogElementHandler);
router.get("/assign/:userId", getBacklogElementsAssignedToHandler);

export default router;
