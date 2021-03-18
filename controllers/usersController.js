let db = require('../database/models');
let bcrypt = require('bcrypt');

let usersController = 

{
    //------------Login------------//
    'login': function(req,res){
        res.render('login')           
     },

     //------------Register------------//

     'register': function(req,res){
        res.render('register')           
    },



    'create' : function(req, res, next){
        db.Usuario.create({
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 12),
        })
        .then(function(){
            res.redirect('/users/registersuccess')
        })

    },

    'registersuccess': function(req, res){
        res.render('registersuccess')
    }
}

module.exports = usersController




