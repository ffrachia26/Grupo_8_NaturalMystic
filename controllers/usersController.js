

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

     'create': function(req,res){
        let usuario = {
            nombre: req.params.nombre,
            apellido: req.params.apellido,
            email: req.params.email,
            password: bcrypt.hashSync(req.params.password, 12)
        }           
    }
}

module.exports = usersController




