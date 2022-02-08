const config = require("../database/db");
require("../models/Associations");
const Course = require("../models/Course");

//Ruta para consultar cursos
exports.getCourse = async (req, res) => {
  try {
    const getCourse = await Course.findAll();
    res.json({
      data: getCourse,
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      message: "Error al mostrar datos " + error,
    });
  }
};

//Controlador de la ruta crear cursos
exports.createCourse = async (req, res) => {
  const { name, teacherId } = req.body;
  try {
    const newCourse = await Course.create({
      name,
      teacherId,
    });
    if (newCourse) {
      return res.json({
        message: "Curso creado correctamente",
        data: newCourse,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Algo ha salido mal " +error,
      data: {},
    });
  }
};

//Controlador para consultar un curso
exports.getOneCourse = async (req, res) => {
  const { id } = req.params;
  try {
    const Course = await Course.findOne({
      where: {
        id,
      },
    });
    res.json({
      data: Course,
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      message: "Algo ha salido mal " +error,
      data: {},
    });
  }
};

//controlador para eliminar curso
exports.deleteCourse = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteRowCount = await Course.destroy({
      where: {
        id,
      },
    });
    res.json({
      message: "Curso Eliminado Correctamente",
      Count: deleteRowCount,
    });
  } catch (error) {
    message: "Error para eliminar " + error;
    data: {
    }
  }
};

//Controlador para actualizar curso
exports.updateCourse = async (req, res) => {
  const { name, teacherId } = req.body;
  const { id } = req.params;
  try {
    const Courses = await Course.findAll({
      where: {
        id,
      },
    });
    if (Courses.length > 0) {
      Courses.forEach(async (Courses) => {
        await Course.update(
          {
            name,
            teacherId,
          },
          {
            where: {
              id,
            },
          }
        );
      });
      return res.json({
        message: "Curso Actualizado Correctamente",
      });
    }
  } catch (error) {
    message: "Error para actualizar " + error;
    data: {
    }
  }
};


