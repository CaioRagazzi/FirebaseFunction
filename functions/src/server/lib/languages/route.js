const router = require('express').Router();
const controller = require("./controller")

router.get("/all", controller.getAllLanguages)

module.exports = router;