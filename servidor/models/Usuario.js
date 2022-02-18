const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database/db');



class User extends Model {
}
User.init({
  name:{
      type:DataTypes.STRING,
      allowNull: false
  },
  email: {
    type:DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password:{
    type:DataTypes.STRING,
    allowNull: false
  },
  registro:{
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, { sequelize, modelName: 'user', timestamps: false });


module.exports = User;