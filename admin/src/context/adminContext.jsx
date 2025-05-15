import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios"

export const AdminContext=createContext()

const AdminContextProvider=(props)=>{
    
    const backend_url = import.meta.env.VITE_BACKEND_URL;
    const [teachers,setteachers]=useState([]);
    const [appointments,setappointments]=useState([]);
    const [atoken,setatoken]=useState(localStorage.getItem('atoken')||"")
    const [dashboardData,setdashboardData]=useState({})
    const getdashboardData=async()=>{
        try{
            const {data}=await axios.post(backend_url+'/api/admin/dashboard',{},{headers:{atoken}})
            if(data.success){
                setdashboardData(data.DashboardData);
            }
        }
        catch(error){
            toast.error(error.message)
        }

    }

    const getallTeacher=async()=>{
            try{
                console.log(atoken);
                const { data } = await axios.post(backend_url + '/api/admin/list',{},{headers:{atoken}});
                if(data.success){
                    setteachers(data.teachers)
                }else{
                    toast.error(data.message);
                }
            }
            catch(error){
                toast.error(error.message)
            }
        }

        const getallAppointment=async()=>{
            try{
                const {data}=await axios.post(`${backend_url}/api/admin/appointment-list`,{},{headers:{atoken}});
                if(data.success){
                    setappointments(data.appointments);
                }
            }
            catch(error){
                toast.error(error.message)
            }
        }

        const cancelAppointment=async(appointmentId)=>{
            try{
                const {data}=await axios.post(`${backend_url}/api/admin/cancelledappointment`,{appointmentId},{headers:{atoken}});
                if(data.success){
                    toast.success(data.message);
                    getallAppointment();
                }
                else{
                    toast.error(data.message)
                }
            }
            catch(error){
                toast.error(error.message)
            }
        }
        const changeAvailablity=async(techId)=>{
            try{
                const {data}=await axios.post(`${backend_url}/api/admin/changeavilable`,{techId},{headers:{atoken}});
                if(data.success){
                    toast.success(data.message);
                    getallTeacher();
                }
                else{
                    toast.error(data.message)
                }
            }
            catch(error){
                toast.error(error.message)
            }
        }
   
        useEffect(()=>{
            if(atoken){
            getallTeacher();
            getallAppointment();
            }
        },[atoken]);

        useEffect(()=>{
            if(atoken){
            getdashboardData(); 
            }
        },[atoken]);
        
    let val={teachers,appointments,atoken,setatoken,backend_url,getdashboardData,dashboardData,cancelAppointment,changeAvailablity};
    return (
        <AdminContext.Provider value={val}>
            {props.children}
        </AdminContext.Provider>
    )
}

export default AdminContextProvider