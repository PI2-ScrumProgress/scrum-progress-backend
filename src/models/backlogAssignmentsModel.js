import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const BacklogAssignment = sequelize.define("backlog_assignments", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    backlogElementId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    timestamps: false
});

export default BacklogAssignment;