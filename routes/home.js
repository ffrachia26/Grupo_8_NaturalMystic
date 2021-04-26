var express = require('express');
const { home } = require('../controllers/homeController.js');
var router = express.Router();
let homeController = require('../controllers/homeController.js')

router.get('/', homeController.home);
router.get('/Aboutus', homeController.nosotros)
router.get('/search', homeController.search)

module.exports = router