const express = require('express');
const app = express();
require('dotenv').config({path: '.env' })
const PORT = process.env.PORT || 3000
const path = require('path')

//Levantamiento del Servidor
app.listen(PORT, ()=>{
    console.log(`Servidor encendido on port: ${PORT}`);
});
    //Archivos Estaticos
app.use(express.static(__dirname + '/public'));

//Middlewares
app.use(express.urlencoded({ extended: true}))
app.use(express.json());

//Rutas
app.use(require('./routes'));

module.exports = app;