const express = require('express');
const cors = require('cors');
require('dotenv').config();



//Crear el servidor/Aplicación de express
const app = express();

//Directorio Público
app.use( express.static('public'));
//Cors
app.use( cors());

//Lectura y parseo del body
app.use( express.json());

//Rutas
app.use('/api/auth', require('./routes/auth'));


app.listen( process.env.PORT, () => {
    console.log(`Servidor corriendo en el puerto ${ process.env.PORT }`);
});