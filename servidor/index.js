const express = require('express');


const sequelize = require('./database/db');

//crear el servidor
const app = express();


//Puerto de la app eroku
const PORT = process.env.PORT || 4000;

//Habilitar express.json
app.use( express.json({extended: true}));

//importar rutas
app.use('/api/usuarios', require('./routes/usuarios'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contactos', require('./routes/contactos'));



//arrancar la app
app.listen(PORT, () =>{
    console.log(`El servidor esta funcionando en el puerto ${PORT}`);

    //Conectarse a la base de datos
    sequelize.sync({force: false}).then(() =>{
        console.log("Se ha conectado a la base de datos");
    }).catch(error =>{
        console.log('Se ha producido un error', error);
    })
});
