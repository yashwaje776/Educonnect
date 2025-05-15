import React, { useContext, useState } from 'react'
import {assets} from '../assets/assets_frontend/assets'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { Appcontext } from '../context/Appcontext'
const Navbar = () => {
    const{token,settoken,userdata}=useContext(Appcontext)
    let navigate=useNavigate()
    const logout=()=>{
        settoken('')
        localStorage.removeItem('token')
        navigate('/login')
    }
  return (
    <div className='flex justify-between items-center py-4 mb-5 border-b border-gray-500'>
        <img src={assets.TASLOGO} className='cursor-pointer w-44 '/>
        <ul className='hidden sm:flex gap-6 items-start font-medium text-sm'>
            <NavLink to='/'>
                <li className='py-1'>HOME</li>
                <hr className='outline-none border-none bg-[#5f6fff] m-auto w-1/2 h-0.5 hidden'></hr>
            </NavLink>
            <NavLink to='/teachers'>
                <li className='py-1'>ALL TEACHERS</li>
                <hr className='outline-none border-none bg-[#5f6fff] m-auto w-1/2 h-0.5 hidden'></hr>
            </NavLink>
            <NavLink to='/about'>
                <li className='py-1'>ABOUT</li>
                <hr className='outline-none border-none bg-[#5f6fff] m-auto w-1/2 h-0.5 hidden'></hr>
            </NavLink>
            <NavLink to='/contact'>
                <li className='py-1'>CONTACT</li>
                <hr className='outline-none border-none bg-[#5f6fff] m-auto w-1/2 h-0.5 hidden'></hr>
            </NavLink>
        </ul>
        {
            token?<div className="relative group cursor-pointer">
  <div className="flex gap-2 items-center">
    <img src={userdata.image} alt="Profile" className="w-10 h-10 rounded-full" />
    <img src={assets.dropdown_icon} alt="Dropdown" />
  </div>

  <div className="hidden group-hover:flex absolute right-0 bootom-9 w-[200px]  flex-col gap-4 bg-gray-100 text-gray-600 font-medium p-4 rounded-lg shadow-lg z-20">
    <p className="cursor-pointer hover:text-black" onClick={()=>navigate('/my-profile')}>My Profile</p>
    <p className="cursor-pointer hover:text-black" onClick={()=>navigate('/my-appointments')}>My Appointment</p>
    <p className="cursor-pointer hover:text-black" onClick={()=>logout()}>Logout</p>
  </div>
</div>

:<button className='bg-[#5f6fff] px-2 sm:px-7 py-3 text-white rounded-full text-sm' onClick={()=>navigate('/login')}>Create account</button>
        } 
      
    </div>
  )
}

export default Navbar
