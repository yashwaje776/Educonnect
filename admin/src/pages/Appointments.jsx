import React, { useContext } from 'react'
import { AdminContext } from '../context/adminContext'
import { assets } from '../assets/assets'

const Appointments = () => {
    const {appointments,cancelAppointment}=useContext(AdminContext);
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
 
         
         <div className='grid grid-cols-[40px_1.5fr_60px_2fr_2fr_60px_60px] items-center py-3 px-6 border-b border-gray-200 font-medium text-gray-700'>
           <p>#</p>
           <p>Student</p>
           <p>Age</p>
           <p>Date & Time</p>
           <p>Teacher</p>
           <p>Fees</p>
           <p>Action</p>
         </div>
 
         
         {appointments.length === 0 ? (
           <div className='text-center text-gray-400 py-10'>No appointments found.</div>
         ) : (
           appointments.map((item, idx) => (
             <div key={idx} className='grid grid-cols-[40px_1.5fr_60px_2fr_2fr_60px_60px] items-center py-3 px-6 border-b border-gray-100 hover:bg-gray-100 text-gray-600'>
               <p>{idx + 1}</p>
               <div className='flex items-center gap-2'>
                 <img
                   src={item.userdata.image}
                   alt='Patient'
                   className='w-8 h-8 object-cover rounded-full'
                 />
                 <span>{item.userdata.name}</span>
               </div>
               <p>{calculateAge(item.userdata.dob)}</p>
               <p>{item.slotdate} , {item.slotTime}</p>
               <div className='flex items-center gap-2'>
                 <img
                   src={item.techdata.image}
                   alt='Patient'
                   className='w-8 h-8 object-cover rounded-full bg-gray-400'
                 />
                 <span>{item.techdata.name}</span>
               </div>
               <p>${item.amount}</p>
               {
                 item.cancelled?<p className='text-red-400 text-xs font-medium'>Cancelled</p>:<img onClick={()=>cancelAppointment(item._id)} className='w-10 cursor-pointer' src={assets.cancel_icon}></img>
               }
               
             </div>
           ))
         )}
       </div>
     </div>
  )
}

export default Appointments
