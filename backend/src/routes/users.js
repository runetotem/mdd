const { Router, response } = require("express");

const router = Router();

router.get("/users", function(req, res){
  res.json({a: 123, b: "dog"})
})

router.post("/users", function(req, res) {
  res.json({message: "usuario criado"})
})


module.exports = router;