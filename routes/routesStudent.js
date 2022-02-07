const express = require('express');
const app = require('../app');
const router = express.Router();
const studentController  = require('../controllers/studentController');

router.get('/student', studentController.createStudent);

module.exports = router