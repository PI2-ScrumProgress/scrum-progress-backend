import BacklogElement from "../models/backlogElementsModel.js";
import Task from "../models/tasksModel.js";

const createTask = async (taskData) => {
    // First extract the backlog element data from the task data, it is everything except due date
    const { dueDate, ...backlogElementData } = taskData;
    // Second create the backlog element with the extracted data asigninging "Task" to the elementType field

    const backlogElement = await BacklogElement.create({
        ...backlogElementData,
        elementType: "Task"
    });
    // Third create the task with the due date and the id of the backlog element

    await Task.create({
        dueDate,
        id: backlogElement.id
    });

    // Return the created backlog element
    return backlogElement;
}

// Gel all tasks with their backlog elements joined
const getTasks = async () => {
    console.log("getTasks");
    return await Task.findAll({ include: [{ model: BacklogElement }] });
}

export { createTask, getTasks };