import { getBacklogElements } from "../services/backlogElementsService.js";

const getBacklogElementsHandler = async (req, res) => {
  try {
    const backlogElements = await getBacklogElements();
    res.status(200).json(backlogElements);
  } catch (error) {
    res.status(500).json({ error: "Error getting backlog elements" });
  }
};

export { getBacklogElementsHandler };
