const controlador = {
    home : function(req,res){
        res.send(fs.readFileSync(__dirname + '/views/index.html', 'utf8'))           
    }
}

module.exports = homeController