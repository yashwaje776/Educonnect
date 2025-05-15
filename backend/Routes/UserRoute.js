import express from "express";
import {  loginuser, registerUser,getUserData, updateProfile,bookappointment,getallAppointment,getallTeacher,cancelledappointment} from "../controllers/Usercontrollers.js";
import authuser from "../middlewares/Authuser.js";
import upload from "../middlewares/Multer.js";

const userRouter=express.Router()

userRouter.post("/register",registerUser);
userRouter.post('/login',loginuser);
userRouter.post('/getuser',authuser,getUserData);
userRouter.post("/updateprofile", upload.single('image'), authuser, updateProfile);
userRouter.post('/bookappointment',authuser,bookappointment);
userRouter.post("/getappointment",authuser,getallAppointment)
userRouter.get("/list",getallTeacher)
userRouter.post('/cancelledappointment',authuser,cancelledappointment)

export default userRouter