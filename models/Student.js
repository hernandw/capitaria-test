const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database/db");

class Student extends Model {}
Student.init(
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
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isNull: {
          msg: "El campo no debe ser nulo",
        },
        isAlpha: {
          args: true,
          msg: "El apellido solo puede contener letras",
        },
        len: {
          args: [3, 60],
          msg: "El apellido tiene que ser entre 3 y 60 caracteres",
        },
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    modelName: "student",
  }
);

module.exports = Student;
