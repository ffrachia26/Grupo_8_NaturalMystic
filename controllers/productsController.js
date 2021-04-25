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

    'verProducto': function(req, res){
        db.Producto.findByPk(req.params.id)
        .then(function(producto){
            return res.render('productoSeleccionado', {producto: producto})
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
                precio: req.body.precio,
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
    //---------------Create-------------//

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
                precio: req.body.precio,
                avatar: data.path,
                id_imagen_id: data.id
            }).then((productos) => {
                return res.redirect('/products')
            }).catch((error) => console.log(error))
        }).catch((error) => console.log(error))
    },
    
    //---------------Editar-------------//

    'editar' : function(req,res){
        db.Producto.findAll({
            include: db.imageproductos
        })
        .then(function(productos){
            return res.render('listaEditarEliminarProductos', {productos: productos})
        })             
    },
    'viewUpdateProduct': function(req, res){
        db.Producto.findByPk(req.params.id)
        .then(function(productos){
            return res.render('EditarProductos', {productos: productos})
        }) 
    },

    //---------------Delete-------------//

    'delete': function(req,res){
        db.Producto.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(function(){
            
              res.redirect('/products/editar')
          })
    },

    //---------------CATEGORIAS-------------//

    'medallones': function(req, res){
        db.Producto.findAll({
            where: {
                categoria: 'Medallones'
            }
        })
        .then(function(medallones){
            res.render('medallones', {medallones: medallones})
        })
    },

    'dulce': function(req, res){
        db.Producto.findAll({
            where: {
                categoria: 'Dulce'
            }
        })
        .then(function(dulce){
            res.render('dulce', {dulce: dulce})
        })
    },
    'quesos': function(req, res){
        db.Producto.findAll({
            where: {
                categoria: 'Quesos'
            }
        })
        .then(function(quesos){
            res.render('quesos', {quesos: quesos})
        })
    },
    'otros': function(req, res){
        db.Producto.findAll({
            where: {
                categoria: 'Otros'
            }
        })
        .then(function(otros){
            res.render('otros', {otros: otros})
        })
    },
    'hogar': function(req, res){
        db.Producto.findAll({
            where: {
                categoria: 'Hogar'
            }
        })
        .then(function(hogar){
            res.render('hogar', {hogar: hogar})
        })
    },
}

module.exports = productsController