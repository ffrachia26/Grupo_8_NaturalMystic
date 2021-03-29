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



    'create' : function(req, res){
        db.Image.create({
            path: req.files[0].filename
        }) .then((data) => {
            db.Usuario.create({
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password, 12),
                id_imagen: data.id
            }).then((user) => {
                return res.render('registersuccess', {user})
            }).catch((error) => console.log(error))
        }).catch((error) => console.log(error))
    },

    'registersuccess': function(req, res){
        res.render('registersuccess')
    },
    //------------Delete--------------//
    'delete': function(req, res){
        db.Usuario.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(){
            res.redirect('/')
        })
    }

}

module.exports = usersController




