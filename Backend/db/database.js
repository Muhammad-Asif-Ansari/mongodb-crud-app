import mongoose from "mongoose";
import "dotenv/config";


const ConnectDatabase = async()=>{
    try{
   const connection = await mongoose.connect(process.env.MONGODB_URI)
    console.log("Mongodb Database Connected")
 }

catch(error){
console.log("DataBase Failed",error);

}
}
export default ConnectDatabase;


