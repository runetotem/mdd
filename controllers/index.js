const AppError = require("../utils/appError");
const conn = require("../services/db");

exports.getAllTodos = (req, res, next) => {
  conn.query("select * from todolist", function (err, data, fields) {
    if(err) return next(new AppError(err))
    res.status(200).json({
      status: "success",
      length: data?.length,
      data: data,
    });
  });
};

exports.createTodo = (req, res, next) => {
  if (!req.body) return next(new AppError("Nenhum dado do formulário foi encontrado", 404));
  const values = [req.body.name, "pending"];
  conn.query(
    "insert into todolist (name, status) values(?)",
    [values],
    function (err, data, fields) {
      if(err) return next(new AppError(err, 500));
      res.status(201).json({
        status: "success",
        message: "todo created!",
      });
    }
  );
};

exports.getTodo = (req, res, next) => {
  if(!req.params.id) {
    return next(new AppError("Nenhum id de tarefas foi encontrado", 404));
  }
  conn.query(
    "select * from todolist where id = ?",
    [req.params.id],
    function (err, data, fields) {
      if(err) return next(new AppError(err, 500));
      res.status(200).json({
        status: "success",
        length: data?.length,
        data: data,
      });
    }
  );
};

exports.updateTodo = (req, res, next) => {
  if(!req.params.id) {
    return next(new AppError("Nenhnum id de tarefa foi encontrado", 404));
  }
  conn.query(
    "update todolist set status='completed' where id=?",
    [req.params.id],
    function (err, data, fields) {
      if(err) return next(new AppError(err, 500));
      res.status(201).json({
        status: "success",
        message: "todo updated!",
      });
    }
  );
};

exports.deleteTodo = (req, res, next) => {
  if (!req.params.id) {
    return next(new AppError("No todo id found", 404));
  }
  conn.query(
    "delete from todolist where id=?",
    [req.params.id],
    function (err, fields) {
      if(err) return next(new AppError(err, 500));
      res.status(201).json({
        status: "success",
        message: "todo deleted!",
      });
    }
  );
}