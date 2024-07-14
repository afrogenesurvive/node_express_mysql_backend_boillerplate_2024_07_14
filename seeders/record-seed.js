"use strict";

const { v4: uuidv4 } = require("uuid"); // Ensure you have uuid installed in your package

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Record",
      [
        {
          id: uuidv4(), // Generate a new UUID for the record
          user_id: uuidv4(), // Replace with an actual user UUID from your Users table
          name: "John Doe record 001",
          description: "...",
          created_at: new Date(), // Corrected field name from created_at to create_at
          updated_at: new Date(), // Corrected field name from updated_at to update_at
        },
        {
          id: uuidv4(), // Generate a new UUID for the record
          user_id: "existing-user-uuid-2", // Replace with an actual user UUID from your Users table
          name: "Jane Smith record 001",
          description: "...",
          created_at: new Date(), // Corrected field name from created_at to create_at
          updated_at: new Date(), // Corrected field name from updated_at to update_at
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Record", null, {});
  },
};
