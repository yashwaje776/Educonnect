import TeacherModel from "../models/TeacherModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import appointmentModel from "../models/appointModel.js";

const login=async(req,res)=>{
    try{
        const {email,password}=req.body;
        if(!email || !password){
            return res.json({success:false,message:"Please enter all fields"})
        }
        const teacher=await TeacherModel.findOne({email});
        const match=await bcrypt.compare(password,teacher.password);
        if(match){
            const Ttoken =jwt.sign({id:teacher._id},process.env.JWT_SECRET);
            res.json({success:true,Ttoken})
        }
    }
    catch(error){
        res.json({success:false,message:error.message})
    }
}

const getappointmet=async(req,res)=>{
    try{
        const {techId}=req.body;
        const appointments=await appointmentModel.find({techId});
        res.json({success:true,appointments});
    }
    catch(error){
        res.json({success:false,message:error.message})
    }
}

const getprofile=async(req,res)=>{
    try{
        const {techId}=req.body;
        const techdata=await TeacherModel.findById(techId);
        res.json({success:true,techdata})
    }
    catch(error){
        res.json({success:false,message:error.message})
    }
}

const changeAvailability=async(req,res)=>{
    try{
        const {techId}=req.body;
        const teacher=await TeacherModel.findById(techId);
        await TeacherModel.findByIdAndUpdate(techId,{available:!teacher.available},{new:true});
        res.json({success:true,message:"Availability changed"})
    }
    catch(error){
        res.json({success:false,message:error.message})
    }
}
const cancelledappointment=async(req,res)=>{
    try{
        const{techId,appointmentId}=req.body;
        const appointmentdata=await appointmentModel.findById(appointmentId);
        await appointmentModel.findByIdAndUpdate(appointmentId,{cancelled:true})


        const{slotdate,slotTime}=appointmentdata;
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
const completeappointment = async (req, res) => {
    try {
        const { techId, appointmentId } = req.body;
        const appointment = await appointmentModel.findById(appointmentId);
        const updated = await appointmentModel.findByIdAndUpdate(
            appointmentId,
            { iscompleted: true },
            { new: true }
        );


        return res.appointmentjson({ success: true, message: "Appointment is completed" });
    }catch(error){
        res.json({success:false,message:error.message});
    }
};

const TeacherDashboard=async(req,res)=>{
    try{
        const{techId}=req.body;
        const appointments=await appointmentModel.find({techId});
        let earings=0;
        appointments.map((item)=>{
            if(item.iscompleted || item.payment){
                earings+=item.amount;
            }
        })
        let students=[];
        appointments.map((item)=>{
            if(!students.includes(item.userId)){
                students.push(item.userId);
            }
        })
        const dashboardData={
            totalappointments:appointments.length,
            earings,
            totalstudent:students.length,
            latestappointment:appointments.reverse().slice(0,5)
        }

        res.json({success:true,dashboardData})
    }
    catch(error){
        res.json({success:false,message:error.message});
    }
}












export {login,getprofile,getappointmet,changeAvailability,cancelledappointment,completeappointment,TeacherDashboard}