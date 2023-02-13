import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { router } from './routes';
import db from "./database/mongo.db";

const PORT = process.env.PORT || 3033;
const app = express();
app.use(cors());
app.use(express.json());
app.use(router);
db().then(() => console.log('Conection with database Mongo'))
app.listen(PORT, () => console.log(`Corriendo el servidor en el puerto ${PORT}`));