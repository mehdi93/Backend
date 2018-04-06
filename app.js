var express = require('express');
var bodyParser = require('body-parser');

var proveedor = require('./routes/proveedor.js');

var app = express();

var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost:27017/erp', {promiseLibrary: require('bluebird')})          // Este puerto es el de la DB
            .then(()=>{
                console.log('Conectado a la DB')
            })
            .catch((err)=>{
                console.error(err);
            })

app.use(bodyParser.json({}));                 //Para poder leer los json
app.use(bodyParser.urlencoded({'extended': false}));

app.use('/proveedor', proveedor); 

app.listen(3000, function(){                                 // Este es el puerto del servidor local
    console.log('Servidor ok en puerto 3000')
})


            
