const controlador = {
    purchase: function(req,res){
        res.send(fs.readFileSync(__dirname + '/views/purchase.html', 'utf8'))           
    }
}

module.exports = purchaseController