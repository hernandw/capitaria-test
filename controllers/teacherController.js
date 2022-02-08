const config = require("../database/db");
require("../models/Associations");
const Teacher = require("../models/Teacher");

//Ruta para consultar estudiantes
exports.getTeacher = async (req, res) => {
  try {
    const getTeacher = await Teacher.findAll();
    res.json({
      data: getTeacher,
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      message: "Error al mostrar datos " + error,
    });
  }
};

//Controlador de la ruta crear profesores
exports.createTeacher = async (req, res) => {
  const { name, lastname } = req.body;
  try {
    const newTeacher = await Teacher.create({
      name,
      lastname,
    });
    if (newTeacher) {
      return res.json({
        message: "Profesor creado correctamente",
        data: newTeacher,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Algo ha salido mal " + error,
      data: {},
    });
  }
};

//Controlador para consultar un estudiante
exports.getOneTeacher = async (req, res) => {
  const { id } = req.params;
  try {
    const Teacher = await Teacher.findOne({
      where: {
        id,
      },
    });
    res.json({
      data: Teacher,
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      message: "Algo ha salido mal " + error,
      data: {},
    });
  }
};

//controlador para eliminar estudiante
exports.deleteTeacher = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteRowCount = await Teacher.destroy({
      where: {
        id,
      },
    });
    res.json({
      message: "Profesor Eliminado Correctamente",
      Count: deleteRowCount,
    });
  } catch (error) {
    message: "Error para eliminar " + error;
    data: {
    }
  }
};

//Controlador para actualizar estudiante
exports.updateTeacher = async (req, res) => {
  const { name, lastname } = req.body;
  const { id } = req.params;
  try {
    const Teachers = await Teacher.findAll({
      where: {
        id,
      },
    });
    if (Teachers.length > 0) {
      Teachers.forEach(async (Teachers) => {
        await Teacher.update(
          {
            name,
            lastname,
          },
          {
            where: {
              id,
            },
          }
        );
      });
      return res.json({
        message: "Profesor Actualizado Correctamente",
      });
    }
  } catch (error) {
    message: "Error para actualizar " + error;
    data: {
    }
  }
};