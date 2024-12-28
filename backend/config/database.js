import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config(); 

function connect(){
    mongoose.connect(process.env.MONGO_URL)
    .then(()=>{
        console.log("connected to mongodb");
    })
    .catch(err=>{
        console.error("Failed to connect to MongoDB:", err.message);
        process.exit(1);
    })
}

export default connect;