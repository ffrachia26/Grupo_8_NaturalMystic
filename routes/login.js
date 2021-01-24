let express = require('express');
let loginController = require('../controllers/loginController.js')
let router = express.router();

router.get('/login', loginController.login); 

module.exports = router