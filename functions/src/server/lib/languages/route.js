const router = require('express').Router();
const controller = require("./controller")

router.get("/list", controller.getPokemons)

module.exports = router;