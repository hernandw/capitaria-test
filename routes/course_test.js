const express = require('express');
const router = express.Router();

const course_testController  = require('../controllers/course_testController'); // Ruta al controlador
const Course_test = require('../models/course_test'); //Ruta al Modelo


//Ruta para ingresar  las Notas
router.post('/nota', course_testController.createCourse_test);

//Ruta para consultar Las Notas
router.get('/nota', course_testController.getCourse_test)

//Ruta para consultar una Nota
router.get('/nota/:id', course_testController.getOneCourse_test);

//Ruta para eliminar una prueba
router.delete('/nota/:id', course_testController.deleteCourse_test)

//Ruta para actualizar Notas
router.put('/nota/:id', course_testController.updateCourse_test);

module.exports = router