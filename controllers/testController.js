const config = require("../database/db");
require("../models/Associations");
const Test = require("../models/Test");

//Ruta para consultar pruebas
exports.getTest = async (req, res) => {
  try {
    const getTest = await Test.findAll();
    res.json({
      data: getTest,
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      message: "Error al mostrar datos " + error,
    });
  }
};

//Controlador de la ruta crear Test
exports.createTest = async (req, res) => {
  const { name, courseId} = req.body;
  try {
    const newTest = await Test.create({
      name,
      courseId,
    });
    if (newTest) {
      return res.json({
        message: "Test creado correctamente",
        data: newTest,
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
exports.getOneTest = async (req, res) => {
  const { id } = req.params;
  try {
    const Test = await Test.findOne({
      where: {
        id,
      },
    });
    res.json({
      data: Test,
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
exports.deleteTest = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteRowCount = await Test.destroy({
      where: {
        id,
      },
    });
    res.json({
      message: "Prueba Eliminada Correctamente",
      Count: deleteRowCount,
    });
  } catch (error) {
    message: "Error para eliminar " + error;
    data: {
    }
  }
};

//Controlador para actualizar estudiante
exports.updateTest = async (req, res) => {
  const { name, courseId } = req.body;
  const { id } = req.params;
  try {
    const Tests = await Test.findAll({
      where: {
        id,
      },
    });
    if (Tests.length > 0) {
      Tests.forEach(async (Tests) => {
        await Test.update(
          {
            name,
            courseId,
          },
          {
            where: {
              id,
            },
          }
        );
      });
      return res.json({
        message: "prueba Actualizada Correctamente",
      });
    }
  } catch (error) {
    message: "Error para actualizar " + error;
    data: {
    }
  }
};