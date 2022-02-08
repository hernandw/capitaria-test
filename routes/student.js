const express = require('express');
const router = express.Router();

const studentController  = require('../controllers/studentController'); // Ruta al controlador
const Student = require('../models/Student'); //Ruta al Modelo


//Ruta para ingresar  los estudiantes 
router.post('/student', studentController.createStudent);

//Ruta para consultar los estudiantes
router.get('/student', studentController.getStudent)

//Ruta para consultar los estudiantes
router.get('/student/:id', studentController.getOneStudent);

//Ruta para eliminar un estudiante
router.delete('/student/:id', studentController.deleteStudent)

//Ruta para actualizar
router.put('/student/:id', studentController.updateStudent);

module.exports = router