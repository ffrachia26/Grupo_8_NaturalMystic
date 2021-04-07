const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const methodOverride = require('method-override');
const bcrypt = require('bcryptjs')
const multer = require('multer')
const session = require('express-session')

//-----------RUTAS--------//

const rutaHome = require('./routes/home')
const rutaProducts = require('./routes/products')
const rutaPurchase = require('./routes/purchase')
const rutaUsers = require('./routes/users');
const { use } = require('./routes/home');
const { urlencoded } = require('express');



//------------SETTINGS------------//

//---app.listen(3000, function(){
   //- console.log('El server esta corriendo en el puerto 3000');
    //-console.log('http://localhost:3000')
//-})

let port = process.env.PORT || 3000

app.use(session({         //Usuage
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
  }));

    app.set('view engine', 'ejs')

    app.set('views', './src/views')

    app.use(express.static(path.join('public')));

    app.use(express.urlencoded({extended: false}));

    app.use(express.json());

    app.use(methodOverride('_method'));

    app.use('/', rutaHome);

    app.use('/products', rutaProducts);

    app.use('/purchase', rutaPurchase)

    app.use('/users', rutaUsers)

   

app.listen(port, () => console.log('Server listening to port: ${port}'))

    

   
        

