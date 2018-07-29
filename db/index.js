const mysql = require('mysql');

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'projectInformation',
});

con.connect();

module.exports = con;
