let db = require('../database/models');
let bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');

let usersController = 

{   
    'list': function(req, res){
        db.Usuario.findAll(
            {
                include: db.Image
            }
        )
        .then(function(usuarios){
            return res.render('listaUsers', {usuarios: usuarios})
        })
    },
    //------------Login------------//
    'login': function(req,res){
        res.render('login')           
     },
     'processLogin': function(req, res){
        let errors = validationResult(req);
        if (errors.isEmpty()) {
            let usuarioALoguearse
            db.Usuario.findAll()
            .then(function(users){
                for (let i = 0; i < users.length; i++){
                    if (users[i].email == req.body.email){
                        if (bcrypt.compareSync(req.body.password, users[i].password)){
                            let usuarioALoguearse = users[i];
                            
                        }
                    } req.session.usuarioLogueado = usuarioALoguearse
                }
                if (usuarioALoguearse == undefined) {
                    return res.render('login', {errors: [
                        {msg: 'Credenciales invalidas'}
                    ]});
                } 
                req.session.usuarioLogueado = usuarioALoguearse
                res.redirect('loginsuccess')
            })
        } else {
            return res.render('index', {errors: errors.errors});
        }
     },

     //------------Register------------//

     'register': function(req,res){
        res.render('register')           
    },



    'create' : function(req, res){
        let errors = validationResult(req);
        if (errors.isEmpty()) {
    
            db.Image.create({
            path: req.files[0].filename
        }) .then((data) => {
            db.Usuario.create({
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password, 12),
                avatar: data.path,
                id_imagen: data.id
            }).then((user) => {
                return res.render('registersuccess', {user})
            }).catch((error) => console.log(error))
        }).catch((error) => console.log(error))
    } else {
        return res.render('register', {errors: errors.errors});
    }
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
            res.redirect('/users/list')
        })
    },
    'viewUpdateProfile': function(req, res){
        db.Usuario.findByPk(req.params.id)
        .then(function(usuarios){
            return res.render('editarUsuarios', {usuarios: usuarios})
        }) 
    },

    'updateProfile': function(req, res) {
        db.Usuario.findByPk(req.params.id)
        .then((user) => {
            db.Usuario.update({
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password, 12),
                avatar: req.files[0].filename,
            },{
                where: {
                    id: req.params.id
                }
            })
            .then(()=> {
                return res.redirect('/users/list')
            })
        })
    }

}

module.exports = usersController




