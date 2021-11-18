const express = require("express");
const router = express.Router();
const productoresController = require("../controllers/productores.controller");

// routers para los productores
router.post("/registrar", productoresController.create);
router.post("/login", productoresController.login);
router.get("/", productoresController.list);
router.get("/:id", productoresController.findById);

module.exports = router;
