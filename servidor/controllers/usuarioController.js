const User = require('../models/Usuario');
const bcryptjs = require('bcryptjs');
const { validationResult } =require('express-validator')
const jwt = require('jsonwebtoken');

exports.crearUsuario =async (req, res) =>{

    //Revisar si hay errores
    const errores = validationResult(req);
    if(!errores.isEmpty()){
        return res.status(400).json({errores: errores.array()})
    }

    //extraer email y password
    const {email, password} = req.body;
    
    try {

        //Validar que el usuario registrado sea unico
        let usuario = await User.findAll({where:{
            email : email
        }})
        
  
        //crea el nuevo usuario
        usuario = new User(req.body);

        //Hashear el password
        const salt = await bcryptjs.genSalt(10);
        usuario.password = await bcryptjs.hash(password, salt);

        await usuario.save();

        //Crear y firmar el JWT
        const payload = {
            usuario:{
                id: usuario.id
            }
        };

        //firmar el JWT
        jwt.sign(payload, 'contraseñasecreta',{
            expiresIn: 3600
        }, (error, token) =>{
            if(error) throw error;
        //Mensaje de confirmacion

        res.json({token});
        })

    } catch (error) {
        console.log(error);
        res.status(400).send('Hubo un error'+error);
    }
}