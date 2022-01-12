const mysql = require('mysql2');

// Connect to database
const db = mysql.createConnection({
  host: 'localhost',
  // Your MySQL username,
  user: 'root',
  // Your MySQL password
  password: 'HUbFvbt3@mtLhmJ$M4N5d-yYsV_ZvvP',
  database: 'election',
});

module.exports = db;
