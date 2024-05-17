import BacklogElement from "../models/backlogElementsModel.js";
import User from "../models/userModel.js";

const getBacklogElements = async () => {
  return await BacklogElement.findAll();
};

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

  // Update backlog element with the user id
  const [created, backlogAssignment] = await BacklogElement.update(
    {
      userId: userId,
    },
    {
      where: {
        id: backlogElementId,
      },
      returning: true,
    }
  );

  if (!created) {
    throw new Error("Backlog element already assigned to user");
  }

  return backlogAssignment;
};

const getBacklogElementsAssignedTo = async (userId) => {
  console.log(userId);
  const user = await User.findByPk(userId);

  if (!user) {
    throw new Error("User not found");
  }

  try {
    const backlogElements = await BacklogElement.findAll({
      where: {
        userId: userId,
      },
    });
    return backlogElements;
  } catch (error) {
    console.error(error);
  }
};

export {
  getBacklogElements,
  assignBacklogElement,
  getBacklogElementsAssignedTo,
};
