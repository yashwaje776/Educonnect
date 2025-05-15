import bcrypt from 'bcrypt';
import UserModel from '../models/UserModel.js';
import validator from 'validator';
import jwt from 'jsonwebtoken';
import {v2 as cloudinary} from "cloudinary"
import appointmentModel from '../models/appointModel.js';
import TeacherModel from '../models/TeacherModel.js';


const registerUser=async(req,res)=>{
    try{
        const{name,email,password}=req.body;
        if(!name || !email || !password){
            return res.json({success:false ,message:"Please fill all the fields"})
        }
        if(password.length<8){
            return res.json({success:false ,message:"Password should be at least 8 characters"})
        }
        if(!validator.isEmail(email)){
            return res.json({success:false ,message:"Please enter a valid email"})
        }
        const user=await UserModel.findOne({email})
        if(user){
            return res.json({success:false ,message:"User already exists"})
        }
        const salt=await bcrypt.genSalt(10);
        const hashedPassword=await bcrypt.hash(password,salt)
        const newUser=new UserModel({
            name,
            email,
            password:hashedPassword
        })
        await newUser.save();

        const token =jwt.sign({id:newUser._id},process.env.JWT_SECRET);
        res.json({success:true,token})
    }
    catch(error){
        res.json({success:false ,message:error.message})
    }
}


const loginuser=async(req,res)=>{
    try{
        const{email,password}=req.body;
        if(!email || !password){
            return res.json({success:false,message:"please filed the complete information"});
        }
        if(!validator.isEmail(email)){
            return res.json({success:false,message:"Please enter a valid email"});
        }
        if(password.length<8){
            return res.json({success:false,message:"Enter a Strong password"});
        }
        const user=await UserModel.findOne({email});
        if(!user){
            return res.json({success:false,message:"Auathorized login"})
        }
        const checkpassword=await bcrypt.compare(password,user.password);
        if(checkpassword){
            const token =jwt.sign({id:user._id},process.env.JWT_SECRET);
            res.json({success:true,token})
        }
    }
    catch(error){
        res.json({success:false ,message:error.message})
    }
}

const getUserData=async(req,res)=>{
    try{
        const {userId}=req.body;
        if(!userId){
            return res.json({success:false,message:"User not found"})
        }
        const user=await UserModel.findById(userId).select("-password")
        res.json({success:true,userData:user})
    }
    catch(error){
        res.json({success:false ,message:error.message})
    }
}

const updateProfile=async(req,res)=>{
    const {userId,name,phone,address,gender,dob}=req.body;
    const image=req.file
    if(!name ||!phone ||!address || !gender ||!dob){
        res.json({success:false,message:"fill complete infomation"});
    }
    await UserModel.findByIdAndUpdate(userId,{name,phone,address:JSON.parse(address),dob,gender})
   if(image){       
       const imageUpload=await cloudinary.uploader.upload(image.path,{resource_type:"image"})
       const imageUrl= imageUpload.secure_url
       await UserModel.findByIdAndUpdate(userId,{image:imageUrl})
    }
    res.json({ success: true, message:"Profile is Upadate" });
}

const bookappointment=async(req,res)=>{
    try{
         const {userId,techId,slotdate,slotTime}=req.body
         const techdata=await TeacherModel.findById(techId).select("-password")
         
         if(!techdata.available){
           return res.json({success:false,message:"teacher is not available"})
         }
         let slots_booked=techdata.slots_booked || {}
         
         if(slots_booked[slotdate]){
            if(slots_booked[slotdate].includes(slotTime)){
              return res.json({success:false,message:"slot not available"})
            }
            else{
                slots_booked[slotdate].push(slotTime)
            }
         }
         else{
            slots_booked[slotdate]=[]
            slots_booked[slotdate].push(slotTime)
         }

         const userdata=await UserModel.findById(userId).select('-password')
         delete techdata.slots_booked
         const appointmentdata={
            userId,
            techId,
            userdata,
            techdata,
            slotdate,
            slotTime,
            amount:techdata.fees,
            date:Date.now()
         }

         const newappointment =new appointmentModel(appointmentdata)
         await newappointment.save()
         
         const data=await TeacherModel.findByIdAndUpdate(techId, { slots_booked }, { new: true });
        
         res.json({success:true,message:"Appointment Booked"})
    }
    catch(error){
        res.json({ success: false, message: error.message });
    }
}

const getallAppointment=async(req,res)=>{
    try{
        const {userId}=req.body;
        if(!userId){
            return res.json({success:false,message:"User not found"})
        }
        const appointment=await appointmentModel.find({userId});
        res.json({success:true,appointment})
    }
    catch(error){
        res.json({ success: false, message: error.message });
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

const cancelledappointment=async(req,res)=>{
    try{
        const{userId,appointmentId}=req.body;
        const appointmentdata=await appointmentModel.findById(appointmentId);
        if(userId!==appointmentdata.userId){
            res.json({success:false,message:'INVILD DATA'})
        }
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



export {registerUser,loginuser,getUserData,updateProfile,bookappointment,getallAppointment,getallTeacher,cancelledappointment};