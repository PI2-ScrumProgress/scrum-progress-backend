import BacklogElement from "../models/backlogElementsModel.js";

const getBacklogElements = async () => {
  return await BacklogElement.findAll();
};

export { getBacklogElements };
