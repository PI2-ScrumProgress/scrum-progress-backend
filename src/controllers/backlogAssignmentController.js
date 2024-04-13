import { assignBacklogElement, getAssignedBacklogElements } from "../services/backlogAssignmentService.js";

const assignBacklogElementHandler = async (req, res) => {
    try {
        const { userId, backlogElementId } = req.body;
        const backlogAssignment = await assignBacklogElement(userId, backlogElementId);
        res.status(201).json(backlogAssignment);
    } catch (error) {
        res.status(500).json({ error: "Error assigning backlog element" });
    }
}

const getAssignedBacklogElementsHandler = async (req, res) => {
    try {
        const { userId } = req.params;
        const backlogElements = await getAssignedBacklogElements(userId);
        res.status(200).json(backlogElements);
    } catch (error) {
        res.status(500).json({ error: "Error getting assigned backlog elements" });
    }
}

export { assignBacklogElementHandler, getAssignedBacklogElementsHandler };