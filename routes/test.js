const express = require('express');
const router = express.Router();

const testController  = require('../controllers/testController'); // Ruta al controlador
const Test = require('../models/Test'); //Ruta al Modelo


//Ruta para ingresar  las pruebas 
router.post('/test', testController.createTest);

//Ruta para consultar Las pruebas
router.get('/test', testController.getTest)

//Ruta para consultar Las pruebas
router.get('/test/:id', testController.getOneTest);

//Ruta para eliminar una prueba
router.delete('/test/:id', testController.deleteTest)

//Ruta para actualizar pruebas
router.put('/test/:id', testController.updateTest);

module.exports = router