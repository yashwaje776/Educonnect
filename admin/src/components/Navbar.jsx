import React from 'react'
import {assets} from '../assets/assets'
import { useContext } from 'react'
import {  useNavigate } from 'react-router-dom'
import { AdminContext } from '../context/adminContext'
import { TeacherContext } from '../context/teacherContext'

const Navbar = () => {
  const {atoken,setatoken}=useContext(AdminContext);
  const {Ttoken,setTtoken}=useContext(TeacherContext);
  let navigate=useNavigate()
  const logout=()=>{
    localStorage.removeItem('atoken');
    localStorage.removeItem('Ttoken');
    setTtoken("");
    setatoken("");
    navigate('/login');

  }

  return (
    <div className='flex justify-between items-center border-b border-gray-200 px-[30px] py-4'>
    <div className='flex items-center gap-2'>   
      <img src={assets.TASLOGO} className='cursor-pointer w-36'></img>
      {atoken?<p className='border rounded px-2'>admin</p>:<p className='border rounded px-2'>teacher</p>}
    </div>
    <button className='bg-blue-700 px-5 py-1 rounded-full text-white' onClick={()=>logout()}>Logout</button>

    </div>
  )
}

export default Navbar
