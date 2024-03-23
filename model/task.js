const { DataTypes } = require("sequelize");
const sequelize = require("../db/coon");

const task = sequelize.define("task", {
  title: {
    type: DataTypes.STRING,
    required: true,
  },
  description: {
    type: DataTypes.STRING,
    required: true,
  },
  done: {
    type: DataTypes.BOOLEAN,
    required: true,
  }
});

module.exports.default = task