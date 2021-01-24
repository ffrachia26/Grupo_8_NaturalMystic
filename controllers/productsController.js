const controlador = {
    products: function(req,res){
        res.send(fs.readFileSync(__dirname + '/views/detail.html', 'utf8'))           
    }
}

module.exports = productsController