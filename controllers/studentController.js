const { json } = require("express/lib/response");
const config = require("../database/db");
require("../models/Associations");
const Student = require("../models/Student");

//Ruta para consultar estudiantes
exports.getStudent = async (req, res) => {
  try {
    const getStudent = await Student.findAll();
    res.json({
      data: getStudent,
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      message: "Error al mostrar datos " + error,
    });
  }
};

//Controlador de la ruta crear estudiante
exports.createStudent = async (req, res) => {
  const { name, lastname } = req.body;
  try {
    const newStudent = await Student.create({
      name,
      lastname,
    });
    if (newStudent) {
      return res.json({
        message: "Estudiante creado correctamente",
        data: newStudent,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Algo ha salido mal",
      data: {},
    });
  }
};

//Controlador para consultar un estudiante
exports.getOneStudent = async (req, res) => {
  const { id } = req.params;
  try {
    const student = await Student.findOne({
      where: {
        id,
      },
    });
    res.json({
      data: student,
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      message: "Algo ha salido mal",
      data: {},
    });
  }
};


//controlador para eliminar estudiante
exports.deleteStudent = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteRowCount = await Student.destroy({
      where: {
        id
      },
    });
    res.json({
      message: "Proyecto Eliminado Correctamente",
      Count: deleteRowCount,
    });
  } catch (error) {
    message: 'Error para eliminar ' + error
    data: {}
  }
};


//Controlador para actualizar estudiante
exports.updateStudent = async (req, res) => {
  const { id } = req.params;
  const { name, lastname } = req.body;
  try {
    const students = await Student.findAll({
      attributes:['id', 'name', 'lastname'],
      where: {
        id
      },
    });
    if(students.length > 0) {
      students.forEach(async (student) => {
        await Student.update({
          name,
          lastname
        });
      });
    }
    return res.json({
      message: "Proyecto Actualizado Correctamente",
      data: students
    });
  } catch (error) {
    message: "Error para actualizar " + error;
    data: {
    }
  }
};
