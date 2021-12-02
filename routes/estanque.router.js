// se crea router para los estanques

const express = require("express");
const router = express.Router();
const estanqueController = require("../controllers/estanque.controller");

router.post("/", estanqueController.create);
router.get("/", estanqueController.find);
router.get("/:id", estanqueController.findOne);
router.put("/:id", estanqueController.update);
router.delete("/:id", estanqueController.remove);

module.exports = router;
