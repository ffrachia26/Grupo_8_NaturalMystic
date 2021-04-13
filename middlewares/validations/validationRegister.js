const { check, body } = require("express-validator");

module.exports = [
    check("name")
    .notEmpty() .withMessage("Por Favor ingrese su Nombre"),
    check("surname")
    .notEmpty() .withMessage("Por Favor ingrese su Apellido"),
    check("email")
    .notEmpty() .withMessage("Por Favor ingrese su Email"),
    check("password")
    .notEmpty() .withMessage("Por Favor ingrese su Contraseña") .isLength({min: 5, max:20}) .withMessage("Minimo 5, Maximo 20 caracteres!"),
]