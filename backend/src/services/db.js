const mysql = require('mysql');

const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "mdd-gabriel", // TODO: Adicionar env
  database: "mdd1",
});

conn.connect();

module.exports = conn;