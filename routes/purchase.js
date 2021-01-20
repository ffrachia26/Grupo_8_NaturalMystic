let express = require('express');

let router = express.router();

router.get('/purchase', function(req,res){
    res.send(fs.readFileSync(__dirname + '/views/purchase.html', 'utf8'))           
}); 

module.exports = router