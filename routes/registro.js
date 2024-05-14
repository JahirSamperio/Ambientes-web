import { Router } from "express";
import {registrarUsuario, autenticar} from '../controllers/registroController.js'
const router = Router();

router.post('/registro', registrarUsuario);

router.post('/login', autenticar);

export default router;