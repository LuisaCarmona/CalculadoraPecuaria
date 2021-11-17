const express = require('express')
const router = express.Router()
const productoresController = require('../controllers/productores.controller');

router.post('/login', productoresController.login)

module.exports = router