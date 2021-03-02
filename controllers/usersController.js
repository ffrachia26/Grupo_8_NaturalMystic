

let usersController = 

{
    //------------Login------------//
    'login': function(req,res){
        res.render('login')           
     },

     //------------Register------------//

     'register': function(req,res){
        res.render('register')           
    }
}

module.exports = usersController




