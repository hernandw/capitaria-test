module.exports = (sequelize, type) => {
    return sequelize.define('course', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: type.STRING
    })
}