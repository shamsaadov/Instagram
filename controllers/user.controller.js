const mongoose = require("mongoose");
const UserController = require("../models/User");

const getUsers = async (req, res) => {
  const users = await UserController.find();
  res.json(users);
};
const getUsersPosts = async (req, res) => {
  const users = await UserController.find({ userId: req.params.id });
  res.json(users);
};
// get user id post
const addUser = async (req, res) => {
  const user = await new UserController({
    name: req.body.name,
  });
  await user.save();
  res.json("Пользователь добавлен");
};

module.exports = {
  addUser,
  getUsers,
  getUsersPosts,
};
