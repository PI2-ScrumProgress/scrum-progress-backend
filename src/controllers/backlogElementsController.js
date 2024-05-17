import {
  getBacklogElements,
  assignBacklogElement,
  getBacklogElementsAssignedTo,
} from "../services/backlogElementsService.js";

const getBacklogElementsHandler = async (req, res) => {
  try {
    const backlogElements = await getBacklogElements();
    res.status(200).json(backlogElements);
  } catch (error) {
    res.status(500).json({ error: "Error getting backlog elements" });
  }
};

const assignBacklogElementHandler = async (req, res) => {
  try {
    const { userId, backlogElementId } = req.body;
    const backlogAssignment = await assignBacklogElement(
      userId,
      backlogElementId
    );
    res.status(201).json(backlogAssignment);
  } catch (error) {
    res.status(500).json({ error: "Error assigning backlog element" });
  }
};

const getBacklogElementsAssignedToHandler = async (req, res) => {
  try {
    const { userId } = req.params;
    const backlogElements = await getBacklogElementsAssignedTo(userId);
    res.status(200).json(backlogElements);
  } catch (error) {
    res.status(500).json({ error: "Error getting assigned backlog elements" });
  }
};

export {
  getBacklogElementsHandler,
  assignBacklogElementHandler,
  getBacklogElementsAssignedToHandler,
};
