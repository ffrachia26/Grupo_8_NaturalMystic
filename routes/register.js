
var express = require('express');
var router = express.Router();
let registerController = require('../controllers/registerController.js')


router.get('/', registerController.register); 


module.exports = router
 