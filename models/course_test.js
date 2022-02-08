const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database/db');

class Course_test extends Model {}
Course_test.init({
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
      studentid: {
        type: DataTypes.INTEGER,
      },
      testid: {
        type: DataTypes.INTEGER,
      }
},{
    sequelize,
    timestamps: false,
    modelName: "course_test"
});

module.exports = Course_test;