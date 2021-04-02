var express = require('express');
var router = express.Router();
let productsController = require('../controllers/productsController.js')
let multer = require('multer')
let guestMiddleware = require('../middlewares/guestMiddleware')
let authMiddleware = require('../middlewares/authMiddleware.')

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

router.get('/crear', authMiddleware, productsController.creacion);
router.post('/crear', authMiddleware,productsController.crear);

router.get('/editar/:id', authMiddleware,productsController.editar)
router.post('/editar/:id', authMiddleware, productsController.editar)

module.exports = router