const express = require("express");
const router = express.Router();
const estanquesController = require("../controllers/estanques.controller")

router.post("/", estanquesController.create)
module.exports = router