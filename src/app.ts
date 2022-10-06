import express from 'express';
import buildingsRouter from './routes/buildings.routes';

const app = express();

app.use(express.json());

app.use('/rainSurface', buildingsRouter);

export default app;