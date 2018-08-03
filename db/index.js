const mysql = require('mysql');

const con = mysql.createConnection({
  host: 'db',
  port: '3306',
  user: 'root',
  database: 'projectInformation',
});

module.exports = con;
