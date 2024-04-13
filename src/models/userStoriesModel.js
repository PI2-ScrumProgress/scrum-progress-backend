import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const UserStory = sequelize.define("user_stories", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    acceptanceCriteria: {
        type: DataTypes.STRING,
        allowNull: true
    },
    storyPoints: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
}, {
    timestamps: false
});


export default UserStory;