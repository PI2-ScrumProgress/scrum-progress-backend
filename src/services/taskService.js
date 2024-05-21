import BacklogElement from "../models/backlogElementsModel.js";
import Task from "../models/tasksModel.js";

const createTask = async (taskData) => {
  const backlogElement = await BacklogElement.create({
    ...taskData,
    elementType: "Task",
    status: "To Do",
  });

  await Task.create({
    id: backlogElement.id,
  });

  return backlogElement;
};

// Gel all tasks with their backlog elements joined
const getTasks = async () => {
  console.log("getTasks");
  return await Task.findAll({ include: [{ model: BacklogElement }] });
};

export { createTask, getTasks };
