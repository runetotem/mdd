const conn = require("../services/db");

conn.query("CREATE DATABASE mdd1", function (err, result) {
  if(err) throw err;
  console.log("banco criado");

});

conn.changeUser({database : 'mdd1'}, function(err) {
  if (err) throw err;
});

var sql = "CREATE TABLE usuario (nome char(255), email varchar(255), telefone varchar(9), departamento int(6), senha varchar(25))";
conn.query(sql, function(errr, result) {
  if(errr) throw errr;
  console.log("tabela criada");
});
