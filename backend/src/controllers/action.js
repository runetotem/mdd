const AppError = require('../utils/appError')
const conn = require("../services/db");

exports.index = (req, res, next) => {

  conn.query(
    "select * from users", 
    (err, data, fields) => {
      if(err) return next(new AppError(err))
      
      console.log(data)

      res.status(200).json({
        status: "success",
        length: data?.length,
        data: data,
      });
  });
};

exports.create = (req, res, next) => {

  conn.connect(function(err) {
    if(err) throw err;
    console.log("Connected!");
    var sql = "INSERT INTO usuario (nome, email, telefone, departamento, senha) VALUES ('?', '?', '?', '?', '?')";
    conn.query(sql, function (err, result) {
      if(err) throw err;
      console.log("registro inserido");
    });
  });

  res.status(501).json({
    message: 'Método POST ainda não implementado'
  })
};

exports.show = (req, res, next) => {
 
  res.status(501).json({
    message: 'Método GET com :id ainda não implementado'
  })
};

exports.update = (req, res, next) => {

  conn.connect(function(err){
    if(err) throw err;
    var sql = "UPDATE usuario SET ? = ";
    conn.query(sql, function(err, result){
      if(err) throw err;
      console.log(result.affectedRows = "registros atualizados");
    });
  });

  res.status(501).json({
    message: 'Método PUT ainda não implementado'
  })
};

exports.delete = (req, res, next) => {
  
  conn.connect(function(err) {
    if(err) throw err;
    var sql = "DELETE FROM usuario WHERE email = '?'";
    conn.query(sql, function(err, result) {
      if(err) throw err;
      console.log("Numero de registros deletados:" + result.affectedRows);
    });
  });

  res.status(501).json({
    message: 'Método DELETE ainda não implementado'
  })
}