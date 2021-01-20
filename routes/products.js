let express = require('express');

let router = express.router();

router.get('/producto/detail', function(req,res){
    res.send(fs.readFileSync(__dirname + '/views/detail.html', 'utf8'))           
}); 

module.exports = router