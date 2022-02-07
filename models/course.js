const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database/db');

class Course extends Model {}
Course.init({
    name: {
        type: DataTypes.STRING(50),
        allowNull: false,
    }
},{
    sequelize,
    timestamps: false,
    modelName: "course"
});

module.exports = Course;