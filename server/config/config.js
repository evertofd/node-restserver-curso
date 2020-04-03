////========================
// Puerto
///=======================

process.env.PORT = process.env.PORT || 3000;

////========================
// Entorno
///=======================

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


////========================
// Vencimiento del Token
///=======================
// 60 segundos
// 60 minutos
// 24 horas
// 30 dias

process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;

////========================
// SEED de autenticación
///=======================

process.env.SEED = process.env.SEED || 'este-es-el-sedd-desarrollo';


////========================
// Base de datos
///=======================

let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = process.env.MONGO_URI;
}
process.env.URLDB = urlDB;


////========================
// Google Client ID
///=======================

process.env.CLIENT_ID = process.env.CLIENT_ID || '630497333762-5ofcmjvn5ugtjf9e16eg1784m00t9qg3.apps.googleusercontent.com';