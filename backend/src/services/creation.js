const conn = require("../services/db");

conn.connect(function(err) {
  if(err) throw err;
  console.log("Connected!");
  conn.query("CREATE DATABASE mdd1", function (err, result) {
    if(err) throw err;
    console.log("banco criado");
  });
});

conn.connect(function(errr) {
  if(errr) throw errr;
  console.log("connected!");
  var sql = "CREATE TABLE usuario (nome char(255), email varchar(255), telefone varchar(9), departamento int(6), senha(25))";
  conn.query(sql, function(errr, result) {
    if(errr) throw errr;
    console.log("tabela criada");
  });
});