
let express = require('express');

let router = express.router();

router.get('/register', function(req,res){
    res.send(fs.readFileSync(__dirname + '/views/register.html', 'utf8'))           
}); 


module.exports = router
 