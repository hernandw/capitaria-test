const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database/db');

class Student_course extends Model{}
Student_course.init({

},{
    sequelize,
    timestamps: false,
    modelName: "student_course",
  })

  module.exports = Student_course