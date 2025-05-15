import validator from "validator"
import {v2 as cloudinary} from "cloudinary"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import TeacherModel from "../models/TeacherModel.js"
import appointmentModel from "../models/appointModel.js"
import UserModel from "../models/UserModel.js"





const addTeacher=async (req,res)=>{
    try{
        const {name,email,password,speciality,degree,experience,about,fees,address,} = req.body;
        const image = req.file;
        console.log({name, email,password,speciality,degree,experience,about,fees,address,},image);
       if(!name ||!email ||!password ||!speciality ||!degree || !experience ||!about ||!fees ||!address ||!image){
        return res.json({success:false,message:"filed the complete data"})
       }
       if(password.length<8){
       return res.json({success:false,message:"enter a strong password"})
       }
       if(!validator.isEmail(email)){
        return res.json({success:false,message:"enter correct email"})
       }

       const Salt=await bcrypt.genSalt(10);
       const hashedPassword=await bcrypt.hash(password,Salt);

       const imageUpload= await cloudinary.uploader.upload(image.path,{resource_type:"image",})
       const imageUrl=imageUpload.secure_url

       const TeacherData = {
        name,
        email,
        image: imageUrl,
        password: hashedPassword,
        speciality,
        degree,
        experience,
        about,
        fees,
        address: JSON.parse(address),
        date: Date.now(),
      };
      const newTeacher = new TeacherModel(TeacherData);
      await newTeacher.save();
    return res.json({ success: true, message: "teacher is added " });
    }
    catch(error){
        return res.json({ success: false, message: error.message });
    }
}

const getallTeacher=async(req,res)=>{
    try{
        const teachers=await TeacherModel.find({}).select("-password")

        res.json({success:true,teachers})
    }
    catch(error){
        return res.json({ success: false, message: error.message });
    }
}

const adminlogin=async(req,res)=>{
    try{
        const {email,password}=req.body;
        if(email==process.env.ADMIN_EMAIL && password==process.env.ADMIN_PASSWORD){
            const atoken=jwt.sign(email+password,process.env.JWT_SECRET);
            res.json({success:true,atoken})
        }
        res.json({success:false,message:"Incorrect password and email"});
    }
    catch(error){
        return res.json({ success: false, message: error.message });
    }
}

const getallappointment=async(req,res)=>{
    try{
        const appointments=await appointmentModel.find({});
        res.json({success:true,appointments});
    }
    catch(error){
        return res.json({ success: false, message: error.message });
    }
}

const DashBoard=async(req,res)=>{
    try{
        const Teachers=await TeacherModel.find({});
        const appointments=await appointmentModel.find({});
        const students=await UserModel.find({});

        const DashboardData={
            teacherscnt:Teachers.length,
            appointmentcnt:appointments.length,
            studentscnt:students.length,
            appointment:appointments.reverse().slice(0,5),
        }
        res.json({success:true,DashboardData})
    }
    catch(error){
        return res.json({ success: false, message: error.message });
    }
}
const cancelledappointment=async(req,res)=>{
    try{
        const{appointmentId}=req.body;
        const appointmentdata=await appointmentModel.findById(appointmentId);
        await appointmentModel.findByIdAndUpdate(appointmentId,{cancelled:true})


        const{techId,slotdate,slotTime}=appointmentdata
        const teacherdata=await TeacherModel.findById(techId);
        let slots_booked=teacherdata.slots_booked;
        slots_booked[slotdate]=slots_booked[slotdate].filter(e=>e!==slotTime)

        await TeacherModel.findByIdAndUpdate(techId,{slots_booked})
        res.json({success:true,message:"Appointment is cancelled"})
    }
    catch(error){
        res.json({success:false,message:error.message});
    }
}

const changeavilable=async(req,res)=>{
    try{
        const {techId}=req.body;
        const teacherdata=await TeacherModel.findById(techId);
        await TeacherModel.findByIdAndUpdate(techId,{available:!teacherdata.available},{new:true});
        res.json({success:true,message:"teacher availablity change"})
    }
    catch(error){
        res.json({success:false,message:error.message});
    }
}



export {addTeacher,getallTeacher,adminlogin,getallappointment,DashBoard,cancelledappointment,changeavilable}