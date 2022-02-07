/* const Sequelize = require('sequelize');
const courseModel = require('../models/course');
require('dotenv').config({path: '.env'});
const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_password, {
  host: process.env.DB_HOST,
  dialect: 'mysql'
});

const course = courseModel(Sequelize, sequelize);

sequelize.sync({ force: false})
.then(()=>{
  console.log('Tablas sincronizadas')
})

module.exports = db */

const { Pool } = require('pg');
require('dotenv').config({path: '.env'});

const db = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false,
    },
  });
  
  db.connect();
  
  module.exports = db;