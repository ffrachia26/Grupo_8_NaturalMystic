var express = require('express');
var router = express.Router();
let productsController = require('../controllers/productsController.js')


router.get('/', productsController.products); 

module.exports = router