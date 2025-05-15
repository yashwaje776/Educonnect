import express from "express"
import upload from "../middlewares/Multer.js"
import { addTeacher, adminlogin, getallTeacher ,getallappointment,DashBoard,cancelledappointment,changeavilable} from "../controllers/Admincontrollers.js"
import authadmin from "../middlewares/Authadmin.js"

const adminRouter=express.Router()

adminRouter.post('/add-teacher',authadmin,upload.single('image'),addTeacher) 
adminRouter.post('/list',authadmin,getallTeacher)
adminRouter.post("/login",adminlogin);
adminRouter.post("/appointment-list",authadmin,getallappointment)
adminRouter.post("/dashboard",authadmin,DashBoard)
adminRouter.post('/cancelledappointment',authadmin,cancelledappointment)
adminRouter.post('/changeavilable',authadmin,changeavilable)

export default adminRouter
 