var express = require('express');
var router = express.Router();
var usersApiController = require ("../../controllers/api/usersApiController");

router.get("/" , usersApiController );

router.get('/getUsers', usersApiController.listUsers);
router.get('/getUsers/:id', usersApiController.detail);
router.get('/getProducts', usersApiController.listProducts)
router.get('/getProducts/:id', usersApiController.detailProduct)

module.exports = router;