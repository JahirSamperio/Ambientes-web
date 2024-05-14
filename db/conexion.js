import mysql from 'mysql2';
import { config } from 'dotenv'
config();

const conexion = mysql.createConnection({
    host: process.env.HOST,
    database: process.env.DATABASE,
    user: process.env.USER,
    password: process.env.PASSWORD
})

const dbConnection = () => {
    conexion.connect( function (err) {
        if (err) {
            console.log('Error de conexion: ', err.stack);
            return;
        }
        console.log('Conexion exitosa a la base de datos: ', conexion.threadId);
    }); 
}

export {
    conexion,
    dbConnection
}