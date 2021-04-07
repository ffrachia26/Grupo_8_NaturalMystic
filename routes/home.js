var express = require('express');
var router = express.Router();
let homeController = require('../controllers/homeController.js')

router.get('/', homeController.home);
router.get('/Aboutus', homeController.nosotros)

module.exports = router