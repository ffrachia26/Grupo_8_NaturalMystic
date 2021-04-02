var express = require('express');
var router = express.Router();
let usersController = require('../controllers/usersController.js');
let multer = require('multer');
let path = require('path');
let db = require('../database/models');
let { check, validationResult, body} = require('express-validator');
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/img/users')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
  })
   
  var upload = multer({ storage: storage });

//-----------------Login---------------//
router.get('/login', usersController.login);
router.post('/login', [
  check('email').isEmail().withMessage('Email invalido'),
  check('password').isLength({min: 8}).withMessage('La contraseña debe tener al menos 8 caracteres')
], usersController.processLogin)

//-----------------Register-------------//
router.get('/register', usersController.register); 
router.post('/register', upload.any(), [
  check('nombre').isLength({min : 1}).withMessage('El campo "Nombre" debe estar completo'),
  check('apellido').isLength({min: 1}).withMessage('El campo "Apellido" debe estar completo'),
  check('email').isEmail().withMessage('El campo "Email" debe ser un email valido'),
  check('password').isLength({min: 8}).withMessage('La contraseña debe tener minimo 8 caracteres')
], usersController.create)

router.get('/registersuccess', usersController.registersuccess )

//-------------Delete-------------//
router.post('/delete/:id', usersController.delete)


module.exports = router
 