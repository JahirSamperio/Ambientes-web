import express from "express";
import cors from 'cors'
import routes from '../routes/routes.js'
import {dbConnection} from '../db/conexion.js'
import cookieParser from "cookie-parser";

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT
        this.conectarBD();
        this.middlewares();
        this.routes();
        this.views();
    }
    
    async conectarBD() {
        try {
            dbConnection();
            console.log("Base de datos conectada");
        } catch (error) {
            throw new Error(error)
        }
    }

    middlewares() {
        //CORS
        this.app.use(cors());

        //Lectura y parseo de body
        this.app.use(express.json());

        this.app.use(express.urlencoded({extended: true}))

        this.app.use(cookieParser())
    }
    routes() {
        this.app.use(routes);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log("Servidor corriendo en el puerto", this.port);
        })
    }
    views() {
        //Habilitar el html
        this.app.set('view engine', 'ejs');

        this.app.set('views', 'views');

        this.app.use(express.static('public'));

    }
}

export default Server;