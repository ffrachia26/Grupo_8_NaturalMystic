var express = require('express');
var router = express.Router();
let usersController = require('../controllers/usersController.js');
let multer = require('multer');
let path = require('path')

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/img/users')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
  })
   
  var upload = multer({ storage: storage })

//-----------------Login---------------//
router.get('/login', usersController.login);

//-----------------Register-------------//
router.get('/register', usersController.register); 
router.post('/register', upload.any(), usersController.create)

router.get('/registersuccess', usersController.registersuccess )

//-------------Delete-------------//
router.post('/delete/:id', usersController.delete)


module.exports = router
 