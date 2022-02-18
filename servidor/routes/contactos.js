const express = require('express');
const router = express.Router();
const contactoController = require('../controllers/contactoController')

//Crea proyectos
//api/proyectos
router.post('/',
    contactoController.crearContacto
)

module.exports = router;