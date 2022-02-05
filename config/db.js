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