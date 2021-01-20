let express = require('express');

let router = express.router();

router.get('/login', function(req,res){
    res.send(fs.readFileSync(__dirname + '/views/login.html', 'utf8'))           
 }); 

module.exports = router