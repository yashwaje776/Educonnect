import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Appcontext } from '../context/Appcontext'

const Teachers = () => {
      const {teachers}=useContext(Appcontext);




      const navigate=useNavigate();
      const {speciality}=useParams()
      console.log(speciality)
      const [filterTech,setfilterTech]=useState([]);
    
      useEffect(() => {
        if (speciality) {
          const filtered = teachers.filter(item => item.speciality.toLowerCase() === speciality.toLowerCase());
          setfilterTech(filtered);
          console.log(filterTech)
        } else {
          setfilterTech(teachers);
        }
      }, [speciality]);
  return (
    <div >
        <p className='text-gray-600'>Browse through the teachers specialist</p>
        <div className=' flex gap-4 justify-between '>
          <div className=' flex flex-col md:w-1/5 gap-2 mt-4 '>
            <p onClick={()=>speciality==='Mathematics'?navigate('/teachers'):navigate('/teachers/Mathematics')} className={`px-4 w-[200px] py-2 border rounded-sm text-gray-700 border-gray-300 text-sm cursor-pointer ${speciality==='Mathematics'?'bg-gray-300':''}`}>Mathematics</p>
            <p onClick={()=>speciality==='Physics'?navigate('/teachers'):navigate('/teachers/Physics')} className={`px-4 w-[200px] py-2 border rounded-sm text-gray-700 border-gray-300 text-sm cursor-pointer ${speciality==='Physics'?'bg-gray-300':''}`}>Physics</p>
            <p onClick={()=>speciality==='Chemistry'?navigate('/teachers'):navigate('/teachers/Chemistry')} className={`px-4 w-[200px] py-2 border rounded-sm text-gray-700 border-gray-300 text-sm cursor-pointer ${speciality==='Chemistry'?'bg-gray-300':''}`}>Chemistry</p>
            <p onClick={()=>speciality==='Biology'?navigate('/teachers'):navigate('/teachers/Biology')} className={`px-4 w-[200px] py-2 border rounded-sm text-gray-700 border-gray-300 text-sm cursor-pointer ${speciality==='Biology'?'bg-gray-300':''}`}>Biology</p>
            <p onClick={()=>speciality==='History'?navigate('/teachers'):navigate('/teachers/History')} className={`px-4 w-[200px] py-2 border rounded-sm text-gray-700 border-gray-300 text-sm cursor-pointer ${speciality==='History'?'bg-gray-300':''}`}>History</p>
          </div>
          <div className='flex sm:grid grid-cols-[1fr_1fr_1fr_1fr]    gap-6 mt-4'>
                {
                 filterTech.map((items,idx)=>(
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
        </div>
      
    </div>
  )
}

export default Teachers
