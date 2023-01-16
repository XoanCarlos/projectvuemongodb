const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');

const app = express();

// Middleware
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use(express.static(path.join(__dirname, 'public')));

// Rutas
app.get('/', function (req, res) {
    res.send('Hola Mundo!');
});

// Middleware para Vue.js router modo history
const history = require('connect-history-api-fallback');
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));

app.set('puerto', process.env.PORT || 3000);
app.listen(app.get('puerto'), function () {
    console.log('Servidor de la aplicación escuchando el puerto '+ app.get('puerto'));
});

const mongoose = require('mongoose');

const uri = 'mongodb://127.0.0.1:27017/viajes';  //no usar localhost en node.js v1.7 o superior
const options = {useNewUrlParser: true};
mongoose.set('strictQuery', true);
// Or using promises
mongoose.connect(uri, options).then(
    /** ready to use. The `mongoose.connect()` promise resolves to mongoose instance. */
    () => { console.log('Conectado a Base Datos Viajes') },
    /** handle initial connection error */
    err => { console.log(err) }
);

app.use('/api', require('../src/route/viaje'));