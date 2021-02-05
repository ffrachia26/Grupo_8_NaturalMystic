
var express = require('express');
var router = express.Router();
let registerController = require('../controllers/registerController.js')


router.get('/register', registerController.register); 


module.exports = router
 