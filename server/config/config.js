// ===============================
//puerto
//================================
process.env.PORT = process.env.PORT || 3000;

// ===============================
//Entorno
//================================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev'


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