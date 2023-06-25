const express = require('express');
require('dotenv').config();

//crear el servidor express
const app = express();

//Directorio publico
app.use( express.static('public'))

//lectura y parseo del body
app.use(express.json());

app.use('/api/auth', require('./routes/auth'))


//escuchar peticiones
app.listen( process.env.PORT , ()=> {
    console.log(` Servidor corriendo en puerto ${process.env.PORT}`)
})