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
 
  res.status(501).json({
    message: 'Método PUT ainda não implementado'
  })
};

exports.delete = (req, res, next) => {
  
  res.status(501).json({
    message: 'Método DELETE ainda não implementado'
  })
}