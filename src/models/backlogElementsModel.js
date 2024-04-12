import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import Task from "./tasksModel.js";
import User from "./userModel.js";
import Project from "./projectsModel.js";
import BacklogAssignment from "./backlogAssignmentsModel.js";
import UserStory from "./userStoriesModel.js";

const BacklogElement = sequelize.define("backlog_elements", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    projectId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    elementType: {
        type: DataTypes.STRING,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true
    },
    priority: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    status: {
        type: DataTypes.STRING,
        allowNull: true
    },
    creationDate: {
        type: DataTypes.DATE,
        allowNull: false
    },
    completionDate: {
        type: DataTypes.DATE,
        allowNull: true
    }
}, {
    timestamps: false
});

BacklogElement.belongsToMany(User, { through: BacklogAssignment, foreignKey: "backlogElementId" });
BacklogElement.belongsTo(Project, { foreignKey: "projectId" });
BacklogElement.hasOne(Task, { foreignKey: "id", onDelete: 'CASCADE' });
BacklogElement.hasOne(UserStory, { foreignKey: "id", onDelete: 'CASCADE' });

export default BacklogElement;