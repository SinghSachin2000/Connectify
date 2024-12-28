// idhar listen kareyenge because we use socket.io http module rehta hai usse create karenge server to kafi easily integrate ho jata hai
import dotenv from "dotenv";
dotenv.config();
import http from 'http';
import app from './app.js';

const server=http.createServer(app);

const port = process.env.PORT || 8000;

server.listen(port,()=>{
    console.log(`server is running on ${port} port`);
})