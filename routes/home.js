let express = require('express');
let homeController = require('../controllers/homeController.js')

let router = express.router();

router.get('/', homeController.home);

module.exports = router