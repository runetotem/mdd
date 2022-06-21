const { Router } = require("express");
// const controllers = require("../controllers"); // TODO: mover controllers para rotas especificas
const usersRoutes = require("./users");

const router = Router();

router.get("/teste", (request, response) => {
  response.json({ rotaTeste: 'OK' })
})

router.use(usersRoutes)

// router.use('/teste2', controllers.index)



module.exports = router;