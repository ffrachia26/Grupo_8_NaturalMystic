let db = require('../database/models')

let productsController = {
    'products': function(req,res){
        db.Producto.findAll()
        .then(function(productos){
            return res.render('detail', {productos: productos})
        })             
    },
    'creacion' : function(req,res){
        res.render('crearProductos')
    },
    'crear': function(req, res, next){
        db.Producto.create({
            nombre: req.body.nombre,
            marca: req.body.marca,
            descripcion: req.body.descripcion,
            categoria: req.body.categoria,
            imagen: req.files[0].filename
        })
        .then(function(){
            res.redirect('/products/crear')
        })
    },

    'editar' : function(req, res){
        res.render('editarProductos')
    }
}

module.exports = productsController