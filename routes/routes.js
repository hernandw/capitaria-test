const express = require('express');
const { user } = require('pg/lib/defaults');
const app = require('../app');
const router = express.Router();
const CourseModel = require('../models/Course')

router.get('/', (req, res) => {
   /*  CourseModel.create({
        name: 'Williams'
    }).then(course =>{
        res.json(course);
    }) */
    res.send('Hola')
})

module.exports = router