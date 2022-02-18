const User = require('../models/Usuario');
const bcryptjs = require('bcryptjs');
const { validationResult } =require('express-validator')
const jwt = require('jsonwebtoken');

exports.autenticarUsuario = async (req, res) =>{

        //Revisar si hay errores
        const errores = validationResult(req);
        if(!errores.isEmpty()){
            return res.status(400).json({errores: errores.array()})
        }

        //Extraer el email y password del req
        const {email, password} = req.body;

        try {
            //Revisar que sea un usuario registrado
            let usuario = await User.findOne({where:{
                email : req.body.email
            }});
            if(!usuario){
                return res.status(400).json({msg: 'El usuario no existe'});
            }

            //Revisar el password
            const passCorrecto = await bcryptjs.compare(password, usuario.password);
            if(!passCorrecto){
                return res.status(400).json({msg: 'Password incorrecto'})
            }

            //Si pasa las validaciones Crear y firmar el JWT
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
        res.json({ token });

        })


        } catch (error) {
            console.log(error);
        }

}