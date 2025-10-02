import express from "express";
import bodyParser from "body-parser";
import "dotenv/config";
import cors from "cors";
import ConnectDatabase from "./db/database.js";
import route from "./routes/userRoutes.js";


ConnectDatabase()
const app = express();
// app.use = (express.json())
app.use(bodyParser.json());

const allowedOrigins = [
  "http://localhost:5173",
  "https://mongodb-crud-app-xzf9.vercel.app"
];

app.use(cors({
  origin: function(origin, callback) {
    // origin == undefined jab Postman ya browser me direct request ho
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));



const PORT = process.env.PORT || 5000;

app.get("/",(req,res)=>{
res.status(200).send("api working Successfully")
})

// app.use("/",(req,res)=>{
// res.send("api working Successfully")
// })

app.use("/api",route)


app.listen(PORT,() => {
console.log(`Server is running on ${PORT}`)
}
)


