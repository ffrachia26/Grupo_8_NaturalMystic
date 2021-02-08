var express = require('express');
var router = express.Router();
let loginController = require('../controllers/loginController.js')


router.get('/', loginController.login); 

module.exports = router