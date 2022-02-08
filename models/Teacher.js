const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database/db");

class Teacher extends Model {}
Teacher.init(
  {
    name: {
      type: DataTypes.STRING(60),
      allowNull: false,
      validate: {
        
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
      type: DataTypes.STRING(60),
      allowNull: false,
      validate: {
        
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
    modelName: "teacher",
  }
);

module.exports = Teacher;
