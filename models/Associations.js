const Course = require('./Course');
const Student = require('./Student');
const Teacher = require('./Teacher');
const Test = require('./Test');
const Student_course = require('./student_course')
const Course_test = require('./course_test')


//Los profesores pueden tener muchos cursos
Teacher.hasMany(Course, { foreignKey: 'teacherId', sourceKey: 'id'});
Course.belongsTo(Teacher, { foreignKey: 'teacherId', sourceKey: 'id'});

//Tablas Asociadas
Student.hasOne(Student_course);
Course.hasOne(Student_course);

//Los cursos tienen muchas pruebas
Course.hasMany(Test, { foreignKey: 'courseId', sourceKey: 'id'})
Test.belongsTo(Course, { foreignKey: 'courseId', sourceKey: 'id'});

//Tablas Asociadas
Student.hasOne(Course_test);
Test.hasOne(Course_test);