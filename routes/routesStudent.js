const express = require('express');
const app = require('../app');
const router = express.Router();
const studentController  = require('../controllers/studentController');
const Student = require('../models/Student');

router.get('/', studentController.home);

//Ruta para ver los estudiantes
router.get('/getstudent/', studentController.getStudent);

//Ruta para ingresar  los estudiantes 
router.post('/student', studentController.createStudent);



module.exports = router