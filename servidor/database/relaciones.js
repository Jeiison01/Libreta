const User = require('../models/Usuario')
const Contacto = require('../models/Contacto')

//User.hasMany(Contacto, {as:"dueño", foreignKey:"propietario_id"})

//Contacto.belongsTo(User, {as:"email", foreignKey:"propietario_id"})