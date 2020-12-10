const express = require('express');
const app = express();
const fs = require('fs');

app.listen(3000, function(){
    console.log('El server esta corriendo en el puerto 3000');
    console.log('http://localhost:3000')
});

    app.get('/', function(req,res){
        res.send(fs.readFileSync(__dirname + '/views/index.html', 'utf8'))           
    });

    app.get('/producto/detail', function(req,res){
        res.send(fs.readFileSync(__dirname + '/views/detail.html', 'utf8'))           
    }); 

    app.get('/purchase', function(req,res){
        res.send(fs.readFileSync(__dirname + '/views/purchase.html', 'utf8'))           
    }); 

    app.get('/register', function(req,res){
        res.send(fs.readFileSync(__dirname + '/views/register.html', 'utf8'))           
    }); 

        app.get('/login', function(req,res){
        res.send(fs.readFileSync(__dirname + '/views/login.html', 'utf8'))           
     }); 

