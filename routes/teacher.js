const express = require('express');
const router = express.Router();

const teacherController  = require('../controllers/teacherController'); // Ruta al controlador
const Teacher = require('../models/Teacher'); //Ruta al Modelo


//Ruta para ingresar  los profesores 
router.post('/teacher', teacherController.createTeacher);

//Ruta para consultar los profesores
router.get('/teacher', teacherController.getTeacher)

//Ruta para consultar los profesores
router.get('/teacher/:id', teacherController.getOneTeacher);

//Ruta para eliminar un estudiante
router.delete('/teacher/:id', teacherController.deleteTeacher)

//Ruta para actualizar
router.put('/teacher/:id', teacherController.updateTeacher);

module.exports = router