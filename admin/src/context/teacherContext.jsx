import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";


export const TeacherContext=createContext();

const TeacherContextProvider=(props)=>{
    const [Ttoken,setTtoken]=useState(localStorage.getItem('Ttoken')||"");
    const [teacherprofile,setTeacherprofile]=useState({});
    const [techappointment,setTechappointment]=useState([]);
    const [dashboardData,setdashboardData]=useState(false);
    const backend_url=import.meta.env.VITE_BACKEND_URL;

    const getprofile=async()=>{
        try{
            const {data}=await axios.post(`${backend_url}/api/teacher/getprofile`,{},{headers:{ttoken:Ttoken}});
            if(data.success){
                setTeacherprofile(data.techdata);
                
            }
            else{
                toast.error(data.message);
            }
        }
        catch(error){
            toast.error(error.message);
        }
    }
    const getappointmet=async()=>{
        try{
            const {data}=await axios.post(`${backend_url}/api/teacher/getappointments`,{},{headers:{ttoken:Ttoken}});
            if(data.success){
                setTechappointment(data.appointments);
                
            }
            else{
                toast.error(data.message);
            }
        }
        catch(error){
            toast.error(error.message);
        }
    }
    const completeappointment=async(appointmentId)=>{
        try{
            const {data}=await axios.post(`${backend_url}/api/teacher/completeappointment`,{appointmentId},{headers:{ttoken:Ttoken}});
            if(data.success){
                toast.success(data.message);
                getappointmet();
            }
            else{
                toast.error(data.message);
            }
        }
        catch(error){
            toast.error(error.message);
        }
    }
    const cancelappointment=async(appointmentId)=>{
        try{
            const {data}=await axios.post(`${backend_url}/api/teacher/cancelappointment`,{appointmentId},{headers:{ttoken:Ttoken}});
            if(data.success){
                toast.success(data.message);
                getappointmet();
            }
            else{
                toast.error(data.message);
            }
        }
        catch(error){
            toast.error(error.message);
        }
    }

    const getdashboard=async()=>{
        try{
            const{data}=await axios.post(`${backend_url}/api/teacher/TeacherDashboard`,{},{headers:{ttoken:Ttoken}});
            if(data.success){
                setdashboardData(data.dashboardData);
                
            }

        }
        catch(error){
            toast.error(error.message);
        }
    }

    useEffect(()=>{
        if(Ttoken){
            getprofile();
            getappointmet();
            getdashboard();
        }
    },[Ttoken])
    
    let val={Ttoken,setTtoken,techappointment,teacherprofile,completeappointment,cancelappointment,setdashboardData,dashboardData};
    return(
    <TeacherContext.Provider value={val}>
        {props.children}
    </TeacherContext.Provider>
    )
}
export default TeacherContextProvider;