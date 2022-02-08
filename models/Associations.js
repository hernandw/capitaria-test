
const Course = require('./Course');
const Student = require('./Student');
const Teacher = require('./Teacher');
const Test = require('./Test');
const Student_course = require('./student_course')
const Course_test = require('./course_test')


/* //Los estudiantes pueden tener muchos cursos
Student.hasMany(Course); */


//Los profesores pueden tener muchos cursos
Teacher.hasMany(Course);

//Tablas Asociadas
Student.hasOne(Student_course);
Course.hasOne(Student_course);

//Las pruebas le pertenecen a un curso
Test.belongsTo(Course);

//Tablas Asociadas
Student.hasOne(Course_test);
Test.hasOne(Course_test);