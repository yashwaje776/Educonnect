import React, { useContext } from 'react'
import { TeacherContext } from '../context/teacherContext'
import { assets } from '../assets/assets'

const Techappointment = () => {
  const {techappointment,cancelappointment,completeappointment}=useContext(TeacherContext);
  const calculateAge=(dob)=>{
    const birthdate=new Date(dob);
    const today=new Date();
    let age=today.getFullYear()-birthdate.getFullYear();
    return age;
}
  return (
      <div className='w-full max-w-6xl m-5'>
           <p className='font-medium text-lg mb-3'>All Appointments</p>
           <div className='bg-white border border-gray-200 rounded text-sm max-h-[80vh] min-h-[60vh] overflow-y-scroll'>
     
             
             <div className='grid grid-cols-[0.5fr_2fr_1fr_1fr_3fr_1fr_1fr] items-center py-3 px-6 border-b border-gray-200 font-medium text-gray-700'>
               <p>#</p>
               <p>Student</p>
               <p>Payment</p>
               <p>Age</p>
               <p>Date & Time</p>
               <p>Fees</p>
               <p>Action</p>
             </div>
     
             
             {techappointment.length === 0 ? (
               <div className='text-center text-gray-400 py-10'>No appointments found.</div>
             ) : (
              techappointment.map((item, idx) => (
                 <div key={idx} className='grid grid-cols-[0.5fr_2fr_1fr_1fr_3fr_1fr_1fr] items-center py-3 px-6 border-b border-gray-100 hover:bg-gray-100 text-gray-600'>
                   <p>{idx + 1}</p>
                   <div className='flex items-center gap-2'>
                     <img
                       src={item.userdata.image}
                       alt='Patient'
                       className='w-8 h-8 object-cover rounded-full'
                     />
                     <span>{item.userdata.name}</span>
                   </div>
                   <p className='border w-[60px] rounded px-1'>{item.payment?"ONLINE":"CASH"}</p>
                   <p>{calculateAge(item.userdata.dob)}</p>
                   <p>{item.slotdate},{item.slotTime}</p>
                   <p>${item.amount}</p>
                   <div className='flex'>
                   {
                    item.cancelled?<p className='text-red-400 text-xs font-medium items-center p-2'>Cancel</p>:item.iscompleted?<p className='text-green-400 text-xs font-medium items-center p-2'>Complete</p>:<p className='flex '><img onClick={()=>cancelappointment(item._id)} className='w-10 cursor-pointer' src={assets.cancel_icon}></img> <img src={assets.tick_icon} className='w-10 cursor-pointer' onClick={()=>completeappointment(item._id)}></img></p>
                   }
                   </div>
                 </div>
               ))
             )}
           </div>
         </div>
  )
}

export default Techappointment
