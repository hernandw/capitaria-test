const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database/db");

class Test extends Model {}
Test.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isNull: {
          msg: "El campo no debe ser nulo",
        },
        isAlpha: {
          args: true,
          msg: "El nombre solo puede contener letras",
        },
        len: {
          args: [3, 60],
          msg: "El nombre tiene que ser entre 3 y 60 caracteres",
        },
      },
    },

    note: {
      type: DataTypes.INTEGER,
      validate: {
        isInt: {
          args: true,
          msg: "La nota debe ser un número",
        },
        min: {
          args: 1,
          msg: "La nota debe ser mayor que 1",
        },
        max: {
          args: 100,
          msg: "La nota no puede ser más de 100",
        },
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    modelName: "test",
  }
);

module.exports = Test;
