import express from "express";
import { login,getprofile ,getappointmet,cancelledappointment,completeappointment,TeacherDashboard} from "../controllers/Teachercontrollers.js";
import authTeacher from "../middlewares/AuthTeacher.js";

const TeacherRouter=express.Router();

TeacherRouter.post('/login',login);
TeacherRouter.post('/getprofile',authTeacher,getprofile);
TeacherRouter.post('/getappointments',authTeacher,getappointmet);
TeacherRouter.post('/completeappointment',authTeacher,completeappointment);
TeacherRouter.post('/cancelappointment',authTeacher,cancelledappointment);
TeacherRouter.post("/TeacherDashboard",authTeacher,TeacherDashboard);

export default TeacherRouter;