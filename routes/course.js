const express = require('express');
const router = express.Router();

const courseController  = require('../controllers/courseController'); // Ruta al controlador
const Course = require('../models/Course'); //Ruta al Modelo


//Ruta para ingresar  un curso 
router.post('/course', courseController.createCourse);

//Ruta para consultar los estudiantes
router.get('/course', courseController.getCourse)

//Ruta para consultar los estudiantes
router.get('/course/:id', courseController.getOneCourse);

//Ruta para eliminar un estudiante
router.delete('/course/:id', courseController.deleteCourse)

//Ruta para actualizar
router.put('/course/:id', courseController.updateCourse);

module.exports = router