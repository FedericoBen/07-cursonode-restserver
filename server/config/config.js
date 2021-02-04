// ===============================
//puerto
//================================
process.env.PORT = process.env.PORT || 3000;

// ===============================
//Entorno
//================================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev'

// ===============================
//vencimiento del Token
//================================
// 60segundos
// 60minutos
// 24horas
// 30dias
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;

// ===============================
//SEED, semilla de autentificacion
//================================
process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo'


//================================
//Base de datos
//================================
let urlDB;
if (process.env.NODE_ENV === 'dev') {
    //cuando este en local va a funcionar con esta url
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    //cuando este en produccion se va a conectar con la base de datos en mongoatlas
    urlDB = process.env.MONGO_URI;
}

process.env.URLDB = urlDB;