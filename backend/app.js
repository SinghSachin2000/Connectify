
import morgan from "morgan";
import express  from "express";
import dotenv from "dotenv";
dotenv.config();
import connectdb from "./config/database.js";
import cookieParser from "cookie-parser";
import cors from 'cors';

connectdb();

import userRoute from "./routes/user.routes.js";
import projectRoutes from './routes/project.routes.js'

const app=express();
app.use(morgan('dev'));//always after app creation

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());


app.use('/users',userRoute);
app.use('/projects',projectRoutes);

app.get('/',(req,res)=>{
    res.send('hello world');
})

export default app;