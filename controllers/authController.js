const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const db = require("../models");

const login = async (req, res) => {
  try {
    res.status(200).send({ auth: "testing" });

    // const user = await db.User.findOne({ where: { email: req.body.email } });
    // if (!user) {
    //   return res.status(404).send("User not found");
    // }

    // const isPasswordValid = await bcrypt.compare(req.body.password, user.password);
    // if (!isPasswordValid) {
    //   return res.status(401).send("Invalid password");
    // }

    // const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: "24h" });
    // res.status(200).send({ auth: true, token });
  } catch (err) {
    res.status(500).send(err);
  }
};

const logout = (req, res) => {
  res.status(200).send({ auth: false, token: null });
};

module.exports = {
  login,
  logout,
};
