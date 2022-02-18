const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database/db');

class Contacto extends Model {
}
Contacto.init({
  name:{
      type:DataTypes.STRING,
      allowNull: false
  },
  creado:{
    type:DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    allowNull: false,
  }
}, { sequelize, modelName: 'contacto', timestamps: false });


module.exports = Contacto;