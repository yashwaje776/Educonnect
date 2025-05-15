import React, { useContext } from 'react'
import { AdminContext } from '../context/adminContext'

const AllTeacher = () => {
    const {teachers,changeAvailablity}=useContext(AdminContext);
  return (
    <div className='m-5 h-[90vh] overflow-y-scroll'>
        <h1 className='text-lg font-medium '>All Doctors</h1>
        <div className='w-full flex flex-wrap pt-5 gap-y-6 gap-6 '>  {}
            {
                teachers.map((item, idx) => (
                    <div key={idx} className='bg-white border border-[#C9D8FF] max-w-56 overflow-hidden cursor-pointer rounded-lg' >
                            <img src={item.image} alt={item.name} className='w-full  object-cover rounded-md mb-4 h-[30vh] bg-amber-100'/>
                        <div className='px-3 flex flex-col gap-1'>
                            <p className='text-lg font-semibold'>{item.name}</p>
                            <p className='text-sm text-gray-600 '>{item.speciality}</p>
                            <div className='flex items-center'>
                                <input onChange={()=>changeAvailablity(item._id)} type='checkbox' checked={item.available}></input>
                                <p>Available</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default AllTeacher
