require('./config/config')
const express = require('express')
const mongoose = require('mongoose')


const app = express();


const bodyParser = require('body-parser');


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())


//configuracion global de rutas
app.use(require('./routes/index'))


mongoose.connect(process.env.URLDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then(db => console.log('Base de datos en linea')).catch(err => console.error(err));

app.listen(process.env.PORT, () => {
    console.log('Escuchando en el puerto 3000');
})