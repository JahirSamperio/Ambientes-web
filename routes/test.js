import {Router} from 'express';
import { presentarEvaluacion} from '../controllers/testController.js';
const router = Router();

router.get('/:id_leccion', presentarEvaluacion);

export default router;