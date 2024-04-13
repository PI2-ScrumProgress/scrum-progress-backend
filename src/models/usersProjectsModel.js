import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import User from "./userModel.js";
import Project from "./projectsModel.js";

const UserProject = sequelize.define("users_projects", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    projectId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: false
});

User.belongsToMany(Project, { through: UserProject, foreignKey: "projectId" });
Project.belongsToMany(User, { through: UserProject, foreignKey: "userId" });

export default UserProject;