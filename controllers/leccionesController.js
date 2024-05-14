import { getLecciones, profileLeccion, temarioLeccion } from "../models/leccionesModel.js";

const cursos = async (req, res) => {
    try {
        //Obtener lecciones
        const lecciones = await getLecciones();

        res.render('Cursos', {
            lecciones: lecciones
        });
    } catch (error) {
        return error.status(500).json({
            error: "Error en el servidor"
        })
        
    }
}

const perfil = async (req, res) => {
    try {
        const {id_leccion} = req.params;
        //Obtener lecciones
        const leccion = await profileLeccion(id_leccion);

        const temario = await temarioLeccion(id_leccion);

        const lec = leccion[0]
        console.log(temario);

        res.render('Curso', {
            leccion: lec,
            temario: temario
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            error: "Error en el servidor"
        })
        
    }
}


export {
    cursos,
    perfil
}