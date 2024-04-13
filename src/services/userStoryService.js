import UserStory from "../models/userStoriesModel.js";
import BacklogElement from "../models/backlogElementsModel.js";

const createUserStory = async (userStoryData) => {

    const { acceptanceCriteria, ...backlogElementData } = userStoryData;

    const backlogElement = await BacklogElement.create({
        ...backlogElementData,
        elementType: "User Story"
    });

    await UserStory.create({
        acceptanceCriteria,
        id: backlogElement.id
    });

    return backlogElement;
}

const getUserStories = async () => {
    return await UserStory.findAll({ include: [{ model: BacklogElement }] });
}

export { createUserStory, getUserStories };