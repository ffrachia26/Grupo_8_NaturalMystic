let homeController = {
    'home' : function(req,res){
        res.render('index')           
    },
    'nosotros': function(req, res){
        res.render('quienessomos')
    }
}

module.exports = homeController