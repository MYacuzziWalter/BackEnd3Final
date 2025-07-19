import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import dotenv from "dotenv";
import usersRouter from './routes/users.router.js';
import petsRouter from './routes/pets.router.js';
import adoptionsRouter from './routes/adoption.router.js';
import sessionsRouter from './routes/sessions.router.js';
import mockRouter from "./routes/mocks.router.js";
import logger from './logger.js';
import { setupSwagger } from './swagger.js';


dotenv.config();
const app = express();

mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("Conexion exitosa, estamos conectados a la base de datos"))
.catch((error) => console.log("Error", error))

app.use(express.json());
app.use(cookieParser());

app.use('/api/users',usersRouter);
app.use('/api/pets',petsRouter);
app.use('/api/adoptions',adoptionsRouter);
app.use('/api/sessions',sessionsRouter);
app.use("/api/mocks", mockRouter);


setupSwagger(app)
export default app;

