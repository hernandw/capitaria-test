const config = require("../database/db");
require("../models/Associations");
const Course_test = require("../models/course_test");

//Ruta para consultar pruebas
exports.getCourse_test = async (req, res) => {
  try {
    const getCourse_test = await Course_test.findAll();
    res.json({
      data: getCourse_test,
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      message: "Error al mostrar datos " + error,
    });
  }
};

//Controlador de la ruta crear Course_test
exports.createCourse_test = async (req, res) => {
  const { note, studentId, testId} = req.body;
  try {
    const newCourse_test = await Course_test.create({
      note,
      studentId,
      testId
    });
    if (newCourse_test) {
      return res.json({
        message: "Nota creada correctamente",
        data: newCourse_test,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Algo ha salido mal " + error,
      data: {},
    });
  }
};

//Controlador para consultar una prueba
exports.getOneCourse_test = async (req, res) => {
  const { id } = req.params;
  try {
    const Course_test = await Course_test.findOne({
      where: {
        id,
      },
    });
    res.json({
      data: Course_test,
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      message: "Algo ha salido mal " +error,
      data: {},
    });
  }
};

//controlador para eliminar prueba
exports.deleteCourse_test = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteRowCount = await Course_test.destroy({
      where: {
        id,
      },
    });
    res.json({
      message: "Nota Eliminada Correctamente",
      Count: deleteRowCount,
    });
  } catch (error) {
    message: "Error para eliminar " + error;
    data: {
    }
  }
};

//Controlador para actualizar estudiante
exports.updateCourse_test = async (req, res) => {
  const { note, studentId, testId } = req.body;
  const { id } = req.params;
  try {
    const Course_tests = await Course_test.findAll({
      where: {
        id,
      },
    });
    if (Course_tests.length > 0) {
      Course_tests.forEach(async (Course_tests) => {
        await Course_test.update(
          {
            note,
            studentId,
            testId
          },
          {
            where: {
              id,
            },
          }
        );
      });
      return res.json({
        message: "Nota Actualizada Correctamente",
      });
    }
  } catch (error) {
    message: "Error para actualizar " + error;
    data: {
    }
  }
};