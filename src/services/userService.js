import User from "../models/userModel.js";
import bcrypt from "bcrypt";

const createUser = async (userData) => {
  const { password, ...otherUserData } = userData;
  const hashedPassword = await bcrypt.hash(password, 10);
  return await User.create({
    ...otherUserData,
    password: hashedPassword,
  });
};

const getUsers = async () => {
  return await User.findAll();
};

const getUsersOrderedByPoints = async () => {
  return await User.findAll({
    order: [["points", "DESC"]],
  });
};

export { createUser, getUsers, getUsersOrderedByPoints };
