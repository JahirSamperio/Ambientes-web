import Leccion from './Leccion.js'
import Pregunta from './Pregunta.js'
import Opcion from './Opcion.js'


Leccion.hasMany(Pregunta, {foreignKey: 'id_leccion'})

Pregunta.belongsTo(Leccion, {foreignKey: 'id_leccion'})

Pregunta.hasMany(Opcion, {foreignKey: 'id_pregunta'})

Opcion.belongsTo(Pregunta, {foreignKey: 'id_pregunta'})



export {
    Leccion,
    Pregunta,
    Opcion
}