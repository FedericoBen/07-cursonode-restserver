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
    urlDB = 'mongodb+srv://federicobg95:WXZP7i9F6vP86Aeu@cluster0.sh5hr.mongodb.net/cafe';
}

process.env.URLDB = urlDB;