import express from "express";
import { create,getAll, getOne, update,deleteUser} from "../controller/userController.js";

const route = express.Router()
route.post("/create",create)
route.get("/getAll",getAll)
route.get("/getuser/:id",getOne)
route.put("/updateUser/:id",update)
route.delete("/deleteUser/:id",deleteUser)
export default route; 