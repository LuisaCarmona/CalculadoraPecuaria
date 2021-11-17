const express = require("express")
const router = express.Router()
const estanquesController = require("../controllers/estanques.controller");

router.post("/", estanquesController.create)
router.get('/', estanquesController.find)
router.get('/:id',estanquesController.findOne)
router.put('/:id',estanquesController.update)
router.delete('/:id',estanquesController.remove)

module.exports = router