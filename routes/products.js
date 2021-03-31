var express = require('express');
var router = express.Router();
let productsController = require('../controllers/productsController.js')
let multer = require('multer')

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/img/users')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
  })
   
  var upload = multer({ storage: storage })

router.get('/', productsController.products); 

router.get('/crear', productsController.creacion);
router.post('/crear', productsController.crear);

router.get('/editar/:id', productsController.editar)
router.post('/editar/:id', productsController.editar)

module.exports = router