const express = require ('express');
//CORS es para poder mandar llamadas en la aplicacion entre los servidores de NODE :3080 y en el que se ejecuta Angular:4200
const cors = require('cors');
//Para ver las llamadas que se le hacer al servidor, Se muetran en consola
const morgan = require('morgan');
const app =express();
//DB
const {mongooseDB} = require('./database');



/**
 *                  NOTA IMPORTANTE
 * 
 * 
 * 
 * Verificar que el puerto sea el mismo el que se tiene configurado aqui con el del archivo employee.service
 * 
 * En caso que no traiga datos, Iniciar mongo usando 'mongod'
 * 
 * correr ambos, servidores, tanto el de Node como el de Angular
 */


//SETTINGS
    
    //process.env.port ->  obtendra el puerto de servicio de la nube
    app.set('port', process.env.PORT  || 8080 );

//MIDDLEWEARS
    
    //Este middlerear nos ayudara a ver el status de cada peticion que llega al servidor
    app.use(morgan('dev'));
    //Que el servidor comprenda el JSON Format
    app.use(express.json());
    /**
     * CORS es para poder mandar llamadas en la aplicacion entre los servidores de NODE :3080 y en el que se ejecuta Angular:4200
     * Configuracion para saber que servidores se pueden comunicar en este caso con el de Angular
     */
    app.use(cors({
        origin: 'http://localhost:4200'
    }));


    
//ROUTES
    //PAra que se le configure que toda la aplciacione necesita iniciar con /api/employees
    app.use( '/api/employees' ,require('./routes/employee.routes') );


//Starting server
    app.listen(app.get('port'),()=>{
        console.log(`Server run in port ${app.get('port')}`);
    });

