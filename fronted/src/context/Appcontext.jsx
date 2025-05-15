import {  useState } from "react";
import { createContext } from "react";
import { toast } from "react-toastify";
import axios from "axios"
import { useEffect } from "react";



export const Appcontext=createContext()

const AppContextProvider=(props)=>{
    const [token,settoken]=useState(localStorage.getItem("token")||"")
    const [teachers,setteachers]=useState([])
    const [userdata,setuserdata]=useState({})
    const [userId,setUserId]=useState();
    const [appointmentdata,setappointmentdata]=useState([])
    
    const backend_url = import.meta.env.VITE_BACKEND_URL;

    const getallTeacher=async()=>{
        try{
            const { data } = await axios.get(backend_url + '/api/user/list');
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

    const loginuser=async(email,password)=>{
        try{
            const {data}=await axios.post(`${backend_url}/api/user/login`,{email,password});
            if(data.success){
                localStorage.setItem("token",data.token);
                settoken(data.token)
                toast.success("Login successfully")
            }
            else{
                toast.error(data.message)
            }
        }
        catch(error){
            toast.error(error.message)
        }
    }

    const registerUser=async(name,email,password)=>{
        try{
            const {data}=await axios.post(`${backend_url}/api/user/register`,{name,email,password});
            if(data.success){
                localStorage.setItem("token",data.token);
                settoken(data.token)
                toast.success("Account created successfully")
            }
            else{
                toast.error(data.message)
            }
        }
        catch(error){
            toast.error(error.message)
        }
    }
    const getUserData=async()=>{
        try{
            console.log(token);
             const {data}=await axios.post(backend_url+'/api/user/getuser',{},{headers:{token}})
             if(data.success){
                setuserdata(data.userData)
                
             }
              else{
                 toast.error(data.message)
              }
        }
        catch(error){
              toast.error(error.message)
        }
    }

    const getallAppointment=async()=>{
        try{
            const{data}=await axios.post(backend_url+'/api/user/getappointment',{},{headers:{token}})
            if(data.success){
                setappointmentdata(data.appointment)
                console.log(data.appointment)
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
        getallTeacher();
    },[token])
    useEffect(()=>{
        if(token){
            getUserData();
            getallAppointment();
        }
    },[token]);

    let val={teachers,token,settoken,registerUser,loginuser,userdata,setuserdata,backend_url,userId,getUserData,getallTeacher,appointmentdata,getallAppointment};

    return (
        <Appcontext.Provider value={val}>
            {
               props.children
            }
        </Appcontext.Provider>
    )

}
export default AppContextProvider