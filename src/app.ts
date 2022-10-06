import express from 'express';
import buildingsRouter from './routes/buildings.routes';

const app = express();
const port = 3000;

app.use(express.json());

app.use('/rainSurface', buildingsRouter);

app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});