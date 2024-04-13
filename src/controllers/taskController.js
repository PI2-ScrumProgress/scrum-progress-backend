import { createTask, getTasks } from '../services/taskService.js';

const createTaskHandler = async (req, res) => {
    try {
        const task = await createTask(req.body);
        res.status(201).json(task);
    } catch (error) {
        res.status(500).json({ error: "Error creating task" });
    }
};

const getTasksHandler = async (req, res) => {
    try {
        const tasks = await getTasks();
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ error: "Error getting tasks" });
    }
}

export { createTaskHandler, getTasksHandler };