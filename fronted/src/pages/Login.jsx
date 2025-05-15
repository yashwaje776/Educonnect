import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Appcontext } from '../context/Appcontext';

const Login = () => {

    const{registerUser,loginuser,token}=useContext(Appcontext);


    const [login,setlogin]=useState(false);
    const [email,setemail]=useState("")
    const [password,setpassword]=useState("");
    const [name,setname]=useState("")
    const navigate=useNavigate()
    const submithndler=async(e)=>{
      e.preventDefault()
      if(login==true){
        await loginuser(email,password);
        if(token){
          navigate("/");
         }
      }
      else{
        await registerUser(name,email,password);
        if(token){
          navigate("/");
         }
      }
      setemail("");
      setpassword("");
      setname("")
    }
  return (
    <form className='min-h-[80vh] flex items-center' onSubmit={(e)=>submithndler(e)}>
          <div className='flex flex-col gap-3 border border-gray-200 mx-auto rounded-xl shadow-lg p-8 w-1/3'>
              {
                login?<p className='text-2xl font-medium text-gray-600'>Login</p>:<p className='text-2xl font-medium text-gray-600'>Create Account</p>
              }  
              {
                login?<p className='text-sm text-gray-500'>Please log in to book appointment</p>:<p className='text-sm text-gray-500'>Please sign up to book appointment</p>
              }
              {
                login?" ":<div className='flex flex-col gap-1'>
                  <p className='text-sm text-gray-600'>Full Name</p>
                  <input type='text' className='border w-full py-1.5 mx-1 rounded border-gray-400' value={name} onChange={(e)=>setname(e.target.value)}></input>
                </div>
              }
              <div className='flex flex-col gap-1'>
                <p className='text-sm text-gray-600'>Email</p>
                <input type='text' className='border w-full py-1.5 rounded border-gray-400' value={email} onChange={(e)=>setemail(e.target.value)}></input>
              </div>
              
              <div className='flex flex-col gap-1'>
                <p className='text-sm text-gray-600'>Password</p>
                <input type='text' className='border w-full py-1.5 rounded border-gray-400' value={password} onChange={(e)=>setpassword(e.target.value)}></input>
              </div>
              {
                login?<button className='bg-[#5f6fff] py-1.5 rounded mt-4'>Login</button>:<button className='bg-[#5f6fff] py-1.5 rounded mt-4'>Create account</button>
              }
              {
                login?<p className='text-sm text-gray-600'>Create an new account? <u onClick={()=>setlogin(!login)} className='cursor-pointer text-blue-500'>Click here</u></p>:<p className='text-sm text-gray-600'>Already have an account? <u onClick={()=>setlogin(!login)} className='cursor-pointer text-blue-500'>Login here</u></p>
              }

          </div>
    </form>
  )
}

export default Login
