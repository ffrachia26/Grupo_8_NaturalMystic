var express = require('express');
var router = express.Router();
let productsController = require('../controllers/productsController.js')
let multer = require('multer')
let guestMiddleware = require('../middlewares/guestMiddleware')
let authMiddleware = require('../middlewares/authMiddleware.');
let db = require('../database/models');
let path = require('path');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/img/products')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
  })
   
  var upload = multer({ storage: storage })

router.get('/', productsController.products); 
router.get('/verProducto/:id', productsController.verProducto);
router.get('/medallones', productsController.medallones)
router.get('/dulce', productsController.dulce)
router.get('/quesos', productsController.quesos)
router.get('/otros', productsController.otros)
router.get('/hogar', productsController.hogar)

router.get('/crear',  productsController.crear);
router.post('/crear', upload.any(), productsController.creacion);

router.get('/editar', productsController.editar)
router.get('/editar/:id',  productsController.viewUpdateProduct)
router.post('/editar/:id', upload.any(), productsController.updateProduct)

router.post('/delete/:id', productsController.delete)

module.exports = router

