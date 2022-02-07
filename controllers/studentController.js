const config = require('../database/db');
require('../models/Associations');


//Controlador para crear estudiante
exports.createStudent = async (req, res) => {
  try {
    Student.create({
      name: req.body.name,
      lastname: req.body.lastname,
    });
  } catch (error) {
    console.log("Error al guardar los datos " + error);
  }
  res.redirect("/");
};