const User = require("../models/User");

// CREATE (POST)
const createUser = async (req, res) => {
  try {
    const user = new User(req.body);
    const result = await user.save();
    res.send(result);
  } catch (err) {
    res.status(500).send(err);
  }
};

// READ (GET)
const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (err) {
    res.status(500).send(err);
  }
};

// READ (GET user detail)
const getUser = async (req, res) => {
  try {
    const users = await User.findById(req.params.id);
    res.send(users);
  } catch (err) {
    res.status(500).send(err);
  }
};

// UPDATE (PUT)
const updateUser = async (req, res) => {
  try {
    const result = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.send(result);
  } catch (err) {
    res.status(500).send(err);
  }
};

// DELETE (DELETE)
const deleteUser = async (req, res) => {
  try {
    const result = await User.findByIdAndDelete(req.params.id);
    res.send(result);
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
};
