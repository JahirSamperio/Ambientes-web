import { Router } from "express";
import {cursos, perfil} from '../controllers/leccionesController.js'
const router = Router();

router.get('/', cursos);

router.get('/:id_leccion', perfil);

export default router;