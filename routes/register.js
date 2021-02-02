
let express = require('express');
let registerController = require('../controllers/registerController.js')
let router = express.router();

router.get('/register', registerController.register); 


module.exports = router
 