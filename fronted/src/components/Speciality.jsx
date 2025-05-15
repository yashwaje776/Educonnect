import React from 'react'
import { assets } from '../assets/assets_frontend/assets'
import { NavLink } from 'react-router-dom'

const Speciality = () => {
     


  return (
    <div id='speciality' className='flex flex-col items-center justify-between gap-4 text-center py-10 text-[#262626]'>
        <p className='text-3xl font-medium'>Find by Speciality</p>
        <p className='text-sm mb-5'>Simply browse through our extensive list of trusted teachers,<br></br> schedule your session hassle-free.</p>
        <ul className='flex flex-row gap-6 items-center justify-center text-xs'>
            <NavLink onClick={()=>scrollTo(0,0)} to={`/teachers/Mathematics`} className='flex flex-col hover:translate-y-[-10px]'>
                <img src={assets.math} className='rounded-full w-25 border mb-1'></img>
                <p>Mathematics</p>
            </NavLink>
            <NavLink onClick={()=>scrollTo(0,0)} to={'/teachers/Physics'} className='flex flex-col hover:translate-y-[-10px]'> 
                <img src={assets.physics} className='rounded-full w-25 border mb-1'></img>
                <p>Physics</p>
            </NavLink>
            <NavLink onClick={()=>scrollTo(0,0)} to={'/teachers/Chemistry'} className='flex flex-col hover:translate-y-[-10px]'>
                <img src={assets.chemistry} className='rounded-full w-25 border mb-1'></img>
                <p>Chemistry</p>
            </NavLink>
            <NavLink onClick={()=>scrollTo(0,0)} to={'/teachers/Biology'} className='flex flex-col hover:translate-y-[-10px]'>
                <img src={assets.biology} className='rounded-full w-25 border mb-1'></img>
                <p>Biology</p>
            </NavLink>
            <NavLink onClick={()=>scrollTo(0,0)} to={'/teachers/History'} className='flex flex-col hover:translate-y-[-10px]'>
              <img src={assets.history} className='rounded-full h-24 w-25 border mb-1'></img>
              <p>History</p>
            </NavLink>
        </ul>
    </div>
  )
}

export default Speciality
