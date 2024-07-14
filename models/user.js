"use strict";
var Sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4(),
        allowNull: false,
        primaryKey: true,
        unique: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        field: "name",
      },
      gender: {
        type: Sequelize.STRING,
        allowNull: true,
        field: "gender",
      },
      age: {
        type: Sequelize.INTEGER,
        allowNull: true,
        field: "age",
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
        field: "password",
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        field: "created_at",
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        field: "updated_at",
      },
    },
    {
      freezeTableName: true,
      tableName: "User",
      underscored: true,
    }
  );

  User.associate = function (models) {
    User.hasMany(models.Record, {
      foreignKey: "user_id", // This should match the field in the Record model that refers to the User
      as: "records", // Optional alias for the association
    });
  };

  return User;
};
