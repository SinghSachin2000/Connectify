
import morgan from "morgan";
import express  from "express";
import dotenv from "dotenv";
dotenv.config();
import connectdb from "./config/database.js";

connectdb();

import userRoute from "./routes/user.routes.js";

const app=express();
app.use(morgan('dev'));//always after app creation

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/users',userRoute);

app.get('/',(req,res)=>{
    res.send('hello world');
})

export default app;