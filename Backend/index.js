import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import "dotenv/config";
import cors from "cors";
import ConnectDatabase from "./db/database.js";
import route from "./routes/userRoutes.js";


ConnectDatabase()
const app = express();
// app.use = (express.json())
app.use(bodyParser.json());
app.use(cors());


const PORT = process.env.PORT || 5000;

// app.get("/",(req,res)=>{
// res.status(200).send("api working Successfully")
// })

// app.use("/",(req,res)=>{
// res.send("api working Successfully")
// })

app.use("/api",route)


app.listen(PORT,() => {
console.log(`Server is running on ${PORT}`)
}
)


