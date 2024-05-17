import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Task = sequelize.define(
  "tasks",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
  },
  {
    timestamps: false,
  }
);

export default Task;
