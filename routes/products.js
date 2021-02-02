let express = require('express');
let productsController = require('../controllers/productsController.js')
let router = express.router();

router.get('/producto/detail', productsController.products); 

module.exports = router