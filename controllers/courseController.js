const config = require('../database/db');
const Student = require('../models/Student');
require('../models/Associations');

exports.createStudent = async(req, res) => {
  Student.create({
    name: req.body.name,
    lastname: req.body.lastname,
  });
};



