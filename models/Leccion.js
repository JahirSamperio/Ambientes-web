import { DataTypes } from "sequelize";
import db from '../db/sequelize.js'

const Leccion = db.define('leccion', {
    id_leccion: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nivel: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

export default Leccion;