const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database/db");

class Test extends Model {}
Test.init(
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
    courseId: {
      type: DataTypes.INTEGER
    }
  },
  {
    sequelize,
    timestamps: false,
    modelName: "test",
  }
);

module.exports = Test;
