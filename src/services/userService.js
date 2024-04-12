import User from '../models/userModel.js';
import bcrypt from 'bcrypt';

const createUser = async (userData) => {
    const { username, email, password, points } = userData;
    const hashedPassword = await bcrypt.hash(password, 10);
    return await User.create({ username, email, password: hashedPassword, points });
};

const getUsers = async () => {
    return await User.findAll();
};

export { createUser, getUsers };
