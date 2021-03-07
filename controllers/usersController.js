

let usersController = 

{
    //------------Login------------//
    'login': function(req,res){
        res.render('login')           
     },

     //------------Register------------//

     'register': function(req,res){
        res.render('register')           
    },
    'create' : function(req, res, next){
        let usuario = {

        nombre: req.params.nombre,
        email: req.params.email,
        password: bcrypt.hashSync(req.params.password, 12),
        avatar: req.files[0].filename
          
        }     

    }
}

module.exports = usersController




