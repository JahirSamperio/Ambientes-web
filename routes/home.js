import { Router } from "express";
import {home, registro, historia, curso} from '../controllers/homeController.js'
const router = Router();

router.get('/', home);

router.get('/registro', registro);

router.get('/historia', historia);

router.get('/curso', curso)

export default router;