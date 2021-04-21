let db = require('../database/models')

let productsController = {
    'products': function(req,res){
        db.Producto.findAll({
            include: db.imageproductos
        })
        .then(function(productos){
            return res.render('listaProducts', {productos: productos})
        })             
    },

    'update': function(req, res) {
        db.Producto.update({
            nombre: req.body.nombre,
                marca: req.body.marca,
                descripcion: req.body.email,
                id_imagen: data.id
        },{
            where: {
                id: req.params.id
            }
        }).then(function(){
            res.render('listaProducts')
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
    

    'editar' : function(req, res){
        res.render('editarProductos')
    }
}

module.exports = productsController