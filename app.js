const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000
const path = require('path')
const sequelize = require('./database/db')


//Creación de las tablas
require('./models/Associations');


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
app.use(require('./routes/student'));
app.use(require('./routes/test'));
app.use(require('./routes/teacher'));
app.use(require('./routes/course'));
app.use(require('./routes/course_test'));



module.exports = app;