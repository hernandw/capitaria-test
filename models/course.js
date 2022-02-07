const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database/db');

class Course extends Model {}
Course.init({
    name: DataTypes.STRING
},{
    sequelize,
    timestamps: false,
    modelName: "course"
});

module.exports = Course;