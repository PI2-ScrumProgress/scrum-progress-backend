import { createUserStory, getUserStories } from "../services/userStoryService.js";

const createUserStoryHandler = async (req, res) => {
    try {
        const userStory = await createUserStory(req.body);
        res.status(201).json(userStory);
    } catch (error) {
        res.status(500).json({ error: "Error creating user story" });
    }
}

const getUserStoriesHandler = async (req, res) => {
    try {
        const userStories = await getUserStories();
        res.json(userStories);
    } catch (error) {
        res.status(500).json({ error: "Error getting user stories" });
    }
}

export { createUserStoryHandler, getUserStoriesHandler };