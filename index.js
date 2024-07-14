require("dotenv").config();

const express = require("express");
const db = require("./models");
const userRoutes = require("./routes/userRoutes");
const recordRoutes = require("./routes/recordRoutes");
const authRoutes = require("./routes/authRoutes");
const authenticateJWT = require("./middleware/authMiddleware");

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Route to test the API
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Use the user routes
app.use("/auth", authRoutes);
app.use("/users", authenticateJWT, userRoutes); // Apply middleware to user routes
app.use("/records", authenticateJWT, recordRoutes); // Apply middleware to user routes

db.sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
});
