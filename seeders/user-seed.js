"use strict";
const { v4: uuidv4 } = require("uuid"); // Ensure you have uuid installed in your package

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "User",
      [
        {
          id: uuidv4(), // Generate a new UUID for the record
          name: "John Doe",
          email: "john.doe@example.com",
          password: "password",
          age: 30,
          gender: "Male",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: uuidv4(), // Generate a new UUID for the record
          name: "Jane Smith",
          email: "jane.smith@example.com",
          password: "password",
          age: 25,
          gender: "Female",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("User", null, {});
  },
};
