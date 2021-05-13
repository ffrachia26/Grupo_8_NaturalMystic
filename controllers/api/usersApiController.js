let db = require('../../database/models');

let usersApiController = {
    listUsers: function(req,res){
        db.Usuario.findAll()
            .then(usuarios => {
                if (usuarios.length > 0){
                    return res.status(200).json({
                        meta: {
                            status: res.statusCode,
                            msg: 'succes',
                            url: req.originalUrl
                        },
                        users: usuarios,
                        count: usuarios.length
                    })
                } else {
                    return res.status(204).json({
                        meta: {
                            status: res.statusCode,
                            msg: 'no data found',
                            url: req.originalUrl
                        },
                        data: {}
                    })
                }
            })
            .catch(err => {
                console.error(err);
                return res.json({
                    error: 'Error interno. Intente nuevamente!'
                })
            })
    },
    'detail': function(req, res) {
        db.Usuario.findByPk()
            .then(usuario => {
                if (usuario.length > 0){
                    return res.status(200).json({
                        meta: {
                            status: res.statusCode,
                            msg: 'succes',
                            url: req.originalUrl
                        },
                        user: {
                            nombre: usuario.nombre,
                            apellido: usuario.apellido,
                            email: usuario.email,
                            id_imagen: usuario.id_imagen,
                            avatar: usuario.avatar
                        }
                        
                    })
                } else {
                    return res.status(204).json({
                        meta: {
                            status: res.statusCode,
                            msg: 'no data found',
                            url: req.originalUrl
                        },
                        data: {}
                    })
                }
            })
            .catch(err => {
                console.error(err);
                return res.json({
                    error: 'Error interno. Intente nuevamente!'
                })
            })
    },
    //-------------PRODUCTS----------//
    listProducts: function(req,res){
        db.Producto.findAll()
            .then(productos => {
                if (productos.length > 0){
                    return res.status(200).json({
                        meta: {
                            status: res.statusCode,
                            msg: 'succes',
                            url: req.originalUrl
                        },
                        products: productos,
                        count: productos.length,
                        
                    })
                } else {
                    return res.status(204).json({
                        meta: {
                            status: res.statusCode,
                            msg: 'no data found',
                            url: req.originalUrl
                        },
                        data: {}
                    })
                }
            })
            .catch(err => {
                console.error(err);
                return res.json({
                    error: 'Error interno. Intente nuevamente!'
                })
            })
    },
    detailProduct: function(req,res){
        db.Producto.findByPk()
            .then(producto => {
                if (producto.length > 0){
                    return res.status(200).json({
                        meta: {
                            status: res.statusCode,
                            msg: 'succes',
                            url: req.originalUrl
                        },
                        producto: {
                            nombre: producto.nombre,
                            marca: producto.marca,
                            descripcion: producto.descripcion,
                            categoria: producto.categoria,
                            precio: producto.precio,
                            id_imagen: producto.id_imagen_id,
                            imagen: producto.avatar
                        },                
                    })
                } else {
                    return res.status(204).json({
                        meta: {
                            status: res.statusCode,
                            msg: 'no data found',
                            url: req.originalUrl
                        },
                        data: {}
                    })
                }
            })
            .catch(err => {
                console.error(err);
                return res.json({
                    error: 'Error interno. Intente nuevamente!'
                })
            })
    },
}

module.exports = usersApiController