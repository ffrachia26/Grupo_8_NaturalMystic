const controlador = {
    register: function(req,res){
        res.send(fs.readFileSync(__dirname + '/views/register.html', 'utf8'))           
    }
}

module.exports = registerController