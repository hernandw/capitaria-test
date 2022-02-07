const express = require('express');
const app = express();
require('dotenv').config({path: '.env' })
const PORT = process.env.PORT || 3000
const path = require('path')
const sequelize = require('./database/db')


//Configuración de Conexion
require('./config/config');

//Levantamiento del Servidor
app.listen(PORT, ()=>{
    console.log(`Servidor encendido on port: ${PORT}`);

    // conectarse a la BBDD
    sequelize.sync({ force: false}).then( () => {
        console.log('Nos hemos conectado a la BBDD');
    }).catch(error =>{
        console.log('Se ha producido un error al conectarse ' + error)
    })
});
    //Archivos Estaticos
app.use(express.static(__dirname + '/public'));

//Middlewares
app.use(express.urlencoded({ extended: false}))
app.use(express.json());

//Rutas
app.use(require('./routes/routes'));

module.exports = app;