import React, { useContext } from 'react'

import { useNavigate } from 'react-router-dom'
import { Appcontext } from '../context/Appcontext';

const TopTeachers = () => {
    const navigate=useNavigate();
    const {teachers}=useContext(Appcontext);
  return (
    <div className='flex flex-col gap-4 items-center pt-20 '>
        <h1 className='text-3xl font-medium'>Top Teachers to Book</h1>
        <p className='text-sm'>Simply browse through our extensive list of trusted teachers</p>
        <div className='flex sm:grid grid-cols-[1fr_1fr_1fr_1fr_1fr] gap-4 py-5 mb-3'>
        {
            teachers.slice(0,10).map((items,idx)=>(
                <div key={idx} className='flex flex-col gap-4 hover:translate-y-[-10px] border border-gray-300 rounded-xl overflow-hidden cursor-pointer ' onClick={()=>navigate(`/appointment/${items._id}`)}>
                    <img src={items.image} className='bg-[#EAEFFF] rounded'></img>
                   <div className='flex flex-col gap-1 px-4 mb-3'>
                   {items.available?<div className='flex gap-2 items-center'>
                                             <p className='w-2 h-2 rounded-full bg-green-500'></p>
                                             <p className='text-green-500'>Available</p>
                                         </div>:<div className='flex gap-2 items-center'>
                                             <p className='w-2 h-2 rounded-full bg-red-500'></p>
                                             <p className='text-red-500'>Available</p>
                                         </div>}
                        <p className='font-semibold'>{items.name}</p>
                        <p className='text-sm text-gray-500'>{items.speciality}</p>
                    </div>
                </div>
            ))
        }
        </div>
        <button className='bg-[#27b5c8] text-gray-600 px-12 py-3 rounded-full mt-2 cursor-pointer'  onClick={()=>{navigate(`/teachers`);scrollTo(0,0)}}>More</button>
      
    </div>
  )
}

export default TopTeachers
