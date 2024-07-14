"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Records", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4(),
        allowNull: false,
        primaryKey: true,
        unique: true,
      },
      user_id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4(),
        allowNull: false,
        // references: {
        //   model: "User", // Note: Use the table name defined in the User migration
        //   key: "id",
        // },
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
    // await queryInterface.removeConstraint("Record", "records_ibfk_1");
    // // Now that the constraint is removed, you can drop the 'user' table
    // await queryInterface.dropTable("user");
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Records");
  },
};
