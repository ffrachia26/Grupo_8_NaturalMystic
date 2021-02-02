const controlador = {
    login: function(req,res){
        res.send(fs.readFileSync(__dirname + '/views/login.html', 'utf8'))           
     }
}

module.exports = loginController