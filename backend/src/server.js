import express from 'express';
import dotenv from 'dotenv';
import cors from "cors"
import path from "path"
import dbconnection from './db/dbconnection.js';
import aircraft from './router/aircarft.router.js'
dotenv.config();
const port = process.env.PORT
const app = express();
const __dirname = path.resolve();

app.use(cors({
    origin:"http://localhost:3000",
    credentials:true
}))
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
// app.get("/",(req,res)=>{
//     res.json({"message":"hello world!!"})
// })

// router for aircarft 
app.use('/api/aircraft',aircraft)


if(process.env.NODE_ENV === "Production"){
    console.log("hai")
    app.use(express.static(path.join(__dirname,"/frontend/build")))
}
app.listen(port,()=>{
    console.log(`port running in ${port} `)
    dbconnection();
})