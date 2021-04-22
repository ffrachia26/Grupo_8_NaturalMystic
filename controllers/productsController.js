let db = require('../database/models')
const usersController = require('./usersController')

let productsController = {
    'products': function(req,res){
        db.Producto.findAll({
            include: db.imageproductos
        })
        .then(function(productos){
            return res.render('listaProducts', {productos: productos})
        })             
    },

    'updateProduct': function(req, res) {
        db.Producto.findByPk(req.params.id)
        .then((producto) => {
            db.Producto.update({
                nombre: req.body.nombre,
                marca: req.body.marca,
                descripcion: req.body.descripcion,
                categoria: req.body.categoria,
                avatar: req.files[0].filename 
            },{
                where: {
                    id: req.params.id
                }
            })
            .then(()=> {
                return res.redirect('/products/editar')
            })
        })
    },


    'crear' : function(req,res){
        res.render('crearProductos')
    },
    'creacion': function(req, res, next){
        db.Imageproducto.create({
            path: req.files[0].filename
        }) .then((data) => {
            db.Producto.create({
                nombre: req.body.nombre,
                marca: req.body.marca,
                descripcion: req.body.descripcion,
                categoria: req.body.categoria,
                avatar: data.path,
                id_imagen_id: data.id
            }).then((productos) => {
                return res.redirect('/products')
            }).catch((error) => console.log(error))
        }).catch((error) => console.log(error))
    },
    

    'editar' : function(req,res){
        db.Producto.findAll({
            include: db.imageproductos
        })
        .then(function(productos){
            return res.render('listaEditarProductos', {productos: productos})
        })             
    },
    'viewUpdateProduct': function(req, res){
        db.Producto.findByPk(req.params.id)
        .then(function(productos){
            return res.render('EditarProductos', {productos: productos})
        }) 
    }
}

module.exports = productsController