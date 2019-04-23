const mongooseDB = require ('mongoose');

//url de mi DB
const URI = 'mongodb://localhost/mean-crud';

mongooseDB.connect(URI)
    .then(db => console.log("DB Connection Success") )
    .catch( err => console.log("DataBase Connection Issue:",err) );


//Esto devuelve la conexion a la DB
module.exports = mongooseDB;