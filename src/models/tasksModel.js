import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Task = sequelize.define("tasks", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    dueDate: {
        type: DataTypes.DATE,
        allowNull: true
    }
}, {
    timestamps: false
});

Task.hasOne(BacklogElement, { foreignKey: "id", onDelete: 'CASCADE' });

export default Task;