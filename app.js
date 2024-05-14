//Importar archivo .env para variables de entorno
import { config } from 'dotenv';
config();
//Importar clase servidor
import Server from './server/server.js'

const server = new Server();

//Levantar servidor
server.listen();
