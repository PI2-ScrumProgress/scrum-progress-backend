import {
  createUser,
  getUsers,
  getUsersOrderedByPoints,
} from "../services/userService.js";

const getUsersHandler = async (req, res) => {
  try {
    const users = await getUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createUserHandler = async (req, res) => {
  try {
    const user = await createUser(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getUsersOrderedByPointsHandler = async (req, res) => {
  try {
    const users = await getUsersOrderedByPoints();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export { getUsersHandler, createUserHandler, getUsersOrderedByPointsHandler };
