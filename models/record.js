"use strict";
var Sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Record = sequelize.define(
    "Record",
    {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4(),
        allowNull: false,
        primaryKey: true,
        unique: true,
      },
      user_id: {
        type: Sequelize.UUID,
        allowNull: false,
        field: "user_id",
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        field: "name",
      },
      description: {
        type: Sequelize.STRING,
        allowNull: true,
        field: "description",
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
      tableName: "Record",
      underscored: true,
    }
  );

  Record.associate = function (models) {
    Record.belongsTo(models.User, {
      foreignKey: "user_id",
      as: "user",
    });
  };

  return Record;
};
