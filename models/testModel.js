import { conexion } from "../db/conexion.js";

function test(id){
    return new Promise((resolve, reject)=>{
        conexion.query(
            `SELECT 
            leccion.id_leccion, 
            leccion.nombre, 
            pregunta.id_pregunta AS pregunta_id_pregunta, 
            pregunta.pregunta AS pregunta_pregunta, 
            pregunta_opcions.id_opcion AS pregunta_opcions_id_opcion, 
            pregunta_opcions.opcion AS pregunta_opcions_opcion 
        FROM 
            leccion 
        LEFT OUTER JOIN 
            pregunta 
            ON leccion.id_leccion = pregunta.id_leccion 
        LEFT OUTER JOIN 
            opciones AS pregunta_opcions 
            ON pregunta.id_pregunta = pregunta_opcions.id_pregunta 
        WHERE 
            leccion.id_leccion = '${id}'
        GROUP BY
            pregunta.id_pregunta;`,
            function(error, result, field){
                if(error)
                    reject(error);
                return resolve(result);
            }
        )
    }) 
}

export {test}

