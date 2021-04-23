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
    }
}

module.exports = homeController