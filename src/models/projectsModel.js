import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Project = sequelize.define("projects", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    timestamps: false
});

Project.belongsToMany(User, { through: UserProject, foreignKey: "projectId" });
Project.hasMany(BacklogElement, { foreignKey: "projectId" });

export default Project;