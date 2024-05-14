import { conexion } from "../db/conexion.js";

function registroUser(data){
    const {nombre,correo, password} = data;
    return new Promise((resolve, reject)=>{
        conexion.query(
            `INSERT INTO usuario(nombre, correo, password)
            VALUES ('${nombre}', '${correo}', '${password}')`,
            function(error, result, field){
                if(error)
                    reject(error);
                return resolve(result);
            }
        )
    }) 
}

function buscarUsuario(email){
    return new Promise((resolve, reject)=>{
        conexion.query(
            `SELECT * FROM usuario where correo='${email}'`,
            function(error, result, field){
                if(error)
                    reject(error);
                return resolve(result);
            }
        )
    }) 
}
function verificarPass(email, password){
    return new Promise((resolve, reject)=>{
        conexion.query(
            `SELECT * FROM usuario where correo='${email}'
            AND password='${password}'`,
            function(error, result, field){
                if(error)
                    reject(error);
                return resolve(result);
            }
        )
    }) 
}


export {
    registroUser,
    buscarUsuario,
    verificarPass
}