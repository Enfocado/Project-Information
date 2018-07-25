const mysql = require('mysql');

const Log = require('log');

const log = new Log('info');

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'projectInformation',
});

con.connect((err) => {
  if (err) throw err;
  log.info('Connected!');
});

module.exports = con;
