let express = require('express');

let router = express.router();

router.get('/', function(req,res){
    res.send(fs.readFileSync(__dirname + '/views/index.html', 'utf8'))           
});

module.exports = router