import express from 'express';
import homeRouter from '../routes/home.js'
import registroRouter from '../routes/registro.js'
import leccionesRouter from '../routes/lecciones.js'
import testRouter from '../routes/test.js'
const app = express();

app.use('/',homeRouter);

app.use('/registrar',registroRouter);

app.use('/cursos',leccionesRouter);

app.use('/evaluacion',testRouter);


export default app;