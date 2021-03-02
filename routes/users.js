var express = require('express');
var router = express.Router();
let usersController = require('../controllers/usersController.js')

//-----------------Login---------------//
router.get('/login', usersController.login);

//-----------------Register-------------//
router.get('/register', usersController.register); 


module.exports = router
 