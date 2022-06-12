const { Router, response } = require("express");
const controllers = require("../controllers");

const router = Router();

router.get("/teste", (request, response) => {
  response.json({ rotaTeste: 'OK' })
})

router.use('/teste2', controllers.index)

module.exports = router;