const express = require('express');
const app = express();
const fs = require('fs');
const rutaHome = require('./routes/home')
const rutaProducts = require('./routes/products')
const rutaPurchase = require('./routes/purchase')
const rutaLogin = require('./routes/login')
const rutaRegister = require('./routes/register')
const path = require('path');
app.listen(3000, function(){
    console.log('El server esta corriendo en el puerto 3000');
    console.log('http://localhost:3000')
});

    app.set('view engine', 'ejs')

    app.set('views', './src/views')

    app.use(express.static(path.join('public')));

    app.use('/', rutaHome);

    app.use('/products', rutaProducts);

    app.use('/purchase', rutaPurchase)

    app.use('/login', rutaLogin)

    app.use('/register', rutaRegister)

    

   
        

