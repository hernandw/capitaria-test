const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database/db');

class Course extends Model {}
Course.init({
    name: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    teacherid: {
        type: DataTypes.INTEGER
    }
},{
    sequelize,
    timestamps: false,
    modelName: "course"
});

module.exports = Course;