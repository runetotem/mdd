const express = require("express");
const cors = require("cors");
const router = require("../routes");
const AppError = require("../utils/appError");
const errorHandler = require("../utils/errorHandler");

app.use(api, router);

app.all("*", (req, res, next) => {
  next(new AppError(`A URL ${req.originalUrl} não existe`, 404));
});
app.use(errorHandler);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`servidor executando na porta ${PORT}`);
});

module.exports = app; // Escolhendo a porta 3000 para "ouvir"