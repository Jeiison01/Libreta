const Contacto = require('../models/Contacto');

//Uno a muchos

exports.crearContacto = async (req,res) =>{
    try {
        //Crea un nuevo contacto
        const contacto = new Contacto(req.body);
        contacto.save();
        res.json(contacto);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}