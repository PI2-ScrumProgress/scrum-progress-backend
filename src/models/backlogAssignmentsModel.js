import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import User from "./userModel.js";
import BacklogElement from "./backlogElementsModel.js";

const BacklogAssignment = sequelize.define("backlog_assignments", {}, {
    timestamps: false
});

BacklogAssignment.belongsTo(User);
BacklogAssignment.belongsTo(BacklogElement);

User.belongsToMany(BacklogElement, { through: BacklogAssignment });
BacklogElement.belongsToMany(User, { through: BacklogAssignment });

export default BacklogAssignment;