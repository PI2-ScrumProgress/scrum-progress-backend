import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import Project from './projectsModel.js';
import UserProject from './usersProjectsModel.js';
import BacklogElement from './backlogElementsModel.js';
import BacklogAssignment from './backlogAssignmentsModel.js';

const User = sequelize.define('users', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    points: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    }
}, {
    timestamps: false
});

User.belongsToMany(Project, { through: UserProject, foreignKey: 'userId' });
User.belongsToMany(BacklogElement, { through: BacklogAssignment, foreignKey: 'userId' });

export default User;