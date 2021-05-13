let db = require('../database/models')

let homeController = {
    'home': function(req,res){
        db.Producto.findAll({
            where: {
                categoria: 'medallones'
            }
        })
        .then(function(productos){
            return res.render('index', {productos: productos})
        })             
    },
    'nosotros': function(req, res){
        res.render('quienessomos')
    },
    'search': function(req, res){
        db.Producto.findAll({
            where: {
                nombre: {
                    [db.Sequelize.Op.like]: '%' + req.query.search + '%',
                }
            }
        }).then(function(busqueda){
            res.render('searchResult', {
                busqueda: busqueda, 
                laQuery: req.query.search
            })
        })
    },
}


module.exports = homeController