const config = require('../database/db');
require('../models/Associations');
const Student = require('../models/Student')


exports.home = async (req, res) => {
  res.send('Pagina Cargada Correctamente');
}

//Controlador para crear estudiante
exports.createStudent = async (req, res) => {
  try {
    const { name, lastname } = req.body;
    const estudiante = await Student.create({
      name,
      lastname,
    });
    if (estudiante) {
      console.log("Estudiante Agregado Correctamente");
    }
  } catch (error) {
    console.log("Error al guardar los datos " + error);
  }
  res.redirect("/");
};

//Controlador para ver los estudiantes registrados
exports.getStudent = async (req, res) => {
  try {
    const estudiante = await Student.findAll()
  .then(student => {
    res.json(student)
  })
  } catch (error) {
    console.log('Error para mostrar los datos ' + error)
  }
}