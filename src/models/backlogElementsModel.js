import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import Task from "./tasksModel.js";
import Project from "./projectsModel.js";
import UserStory from "./userStoriesModel.js";
import User from "./userModel.js";

const BacklogElement = sequelize.define(
  "backlog_elements",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    projectId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    elementType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    priority: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    creationDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    dueDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    completionDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    timestamps: false,
  }
);

BacklogElement.hasOne(Task, { foreignKey: "id", onDelete: "CASCADE" });
BacklogElement.hasOne(UserStory, { foreignKey: "id", onDelete: "CASCADE" });

Task.hasOne(BacklogElement, { foreignKey: "id" });
UserStory.hasOne(BacklogElement, { foreignKey: "id" });

BacklogElement.belongsTo(User, { foreignKey: "userId" });

export default BacklogElement;
