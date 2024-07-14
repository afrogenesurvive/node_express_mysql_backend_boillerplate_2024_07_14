const db = require("../models");
const bcrypt = require("bcrypt");
const saltRounds = 10; // You can adjust the salt rounds as needed

// Get all users
const getAllUsers = async (req, res) => {
  try {
    const users = await db.User.findAll();
    res.json(users);
  } catch (err) {
    res.status(500).send(err);
  }
};

// Get a user by ID
const getUserById = async (req, res) => {
  try {
    const user = await db.User.findByPk(req.params.id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).send("User not found");
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

// Create a new user
const createUser = async (req, res) => {
  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);

    // Create the user with the hashed password
    const newUser = await db.User.create({
      ...req.body,
      password: hashedPassword, // Use the hashed password instead of the plain one
    });

    // Respond without returning the password
    const { password, ...userWithoutPassword } = newUser.get({ plain: true });
    res.status(201).send(`User added with ID: ${userWithoutPassword.id}`);
  } catch (err) {
    res.status(500).send(err);
  }
};

// Update a user by ID
const updateUser = async (req, res) => {
  try {
    const [updated] = await db.User.update(req.body, {
      where: { id: req.params.id },
    });
    if (updated) {
      const updatedUser = await db.User.findByPk(req.params.id);
      res.status(200).json(updatedUser);
    } else {
      res.status(404).send("User not found");
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

// Delete a user by ID
const deleteUser = async (req, res) => {
  try {
    const deleted = await db.User.destroy({
      where: { id: req.params.id },
    });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).send("User not found");
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
