var express = require('express');
var router = express.Router();
let purchaseController = require('../controllers/purchaseController.js')



router.get('/purchase', purchaseController.purchase); 

module.exports = router