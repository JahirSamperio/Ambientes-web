import { Leccion, Pregunta, Opcion } from '../models/asosiaciones.js';
import { Sequelize } from 'sequelize';
import {test} from '../models/testModel.js'
import {profileLeccion} from '../models/leccionesModel.js'

const presentarEvaluacion = async (req, res) => {
    try {
        const { id_leccion } = req.params;

        // const leccion = await profileLeccion(id_leccion);
        const leccion = await Leccion.findOne({ where: { id_leccion } });
        console.log(leccion)

        //Crear JOIN
        const cuestionario = await test(id_leccion);
        
        const evaluacion = Array.isArray(cuestionario) ? cuestionario[0] : cuestionario;
        // console.log(evaluacion);

        // res.render('Cuestionario', {
        //     leccion: leccion,
        //     evaluacion: evaluacion
        // })
        res.status(200).json ({
            leccion: leccion,
            evaluacion: cuestionario
        })
    } catch (error) {
        console.log(error);
        return res.render('alertas', {
            mensaje: "Error en el servidor:("
        });
    }
}

export {
    presentarEvaluacion
}