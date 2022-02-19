const Sequelize = require('sequelize');

const sequelize = require('../util/database');

exports.users = sequelize.define('users',{
  id: {
    type : Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  FullName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  userName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  dateofbirth: {
    type: Sequelize.DATE,
    allowNull: true
  }
});

module.exports = users;
