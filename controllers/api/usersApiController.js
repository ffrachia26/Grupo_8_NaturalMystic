let db = require('../../database/models');

let usersApiController = {
    list: function(req,res){
        db.User.findAll({
            attributes: ['name', 'apellido', "email", "id"]
        })
            .then(function (users) {
                let respuesta = {
                    meta: {
                        status:200,
                        url: "/api/users"
                    },
                    data: { 
                        users: users,
                        count: users.lenght
                }
            };

                res.send(respuesta); 
            })





    }
}