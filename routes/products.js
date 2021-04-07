var express = require('express');
var router = express.Router();
let productsController = require('../controllers/productsController.js')
let multer = require('multer')
let guestMiddleware = require('../middlewares/guestMiddleware')
let authMiddleware = require('../middlewares/authMiddleware.')

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

router.get('/crear',  productsController.crear);
router.post('/crear', productsController.creacion);

router.get('/editar/:id', productsController.editar)
router.post('/editar/:id',  productsController.update)

module.exports = router