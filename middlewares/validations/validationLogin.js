const { check, body } = require('express-validator');

module.exports = [
    check("email")
        .isEmail() .withMessage("Por Favor ingrese un mail valido!"),
    check("password")
        .notEmpty() .withMessage("Por Favor ingrese una contraseña valida!"),    
]
