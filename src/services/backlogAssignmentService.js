import BacklogAssignment from "../models/backlogAssignmentsModel.js";
import BacklogElement from "../models/backlogElementsModel.js";
import User from "../models/userModel.js";

const assignBacklogElement = async (userId, backlogElementId) => {
    // Check if the user exists
    const user = await User.findByPk(userId);

    if (!user) {
        throw new Error("User not found");
    }

    // Check if the backlog element exists
    const backlogElement = await BacklogElement.findByPk(backlogElementId);

    if (!backlogElement) {
        throw new Error("Backlog element not found");
    }

    // Find or create the backlog assignment
    const [backlogAssignment, created] = await BacklogAssignment.findOrCreate({
        where: {
            "userId": userId,
            "backlogElementId": backlogElementId
        }
    });

    if (!created) {
        throw new Error("Backlog element already assigned to user");
    }

    return backlogAssignment;
}

const getAssignedBacklogElements = async (userId) => {
    console.log(userId);
    const user = await User.findByPk(userId);

    if (!user) {
        throw new Error("User not found");
    }

    try {
        const backlogElements = await BacklogAssignment.findAll({
            where: {
                userId: userId
            },
            include: BacklogElement
        });
        return backlogElements;
    } catch (error) {
        console.error(error);
    }
}

export { assignBacklogElement, getAssignedBacklogElements };