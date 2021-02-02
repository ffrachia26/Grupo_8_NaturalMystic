let express = require('express');
let purchaseController = require('../controllers/purchaseController.js')

let router = express.router();

router.get('/purchase', purchaseController.purchase); 

module.exports = router