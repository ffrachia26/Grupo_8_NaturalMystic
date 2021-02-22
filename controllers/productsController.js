let productsController = {
    'products': function(req,res){
        res.render('detail')           
    },
    'crear' : function(req,res){
        res.render('crearProductos')
    },
    'editar' : function(req, res){
        res.render('editarProductos')
    }
}

module.exports = productsController