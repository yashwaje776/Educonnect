import React, { useContext } from 'react'
import { TeacherContext } from '../context/teacherContext'
import { assets } from '../assets/assets'

const Dashboard = () => {
   const{setdashboardData,dashboardData}=useContext(TeacherContext)
  return (
    <div className="m-5 overflow-y-scroll max-h-[80vh]">
          
          <div className="flex flex-wrap gap-3 ">
            <div className="flex items-center gap-2 bg-white p-4 min-w-52 rounded-lg shadow-sm">
              <img src={assets.earning_icon} alt="Doctor Icon" />
              <div>
                <p className="font-bold">{dashboardData.earings}</p>
                <p className="text-gray-700">Earings</p>
              </div>
            </div>
    
            <div className="flex items-center gap-2 bg-white p-4 min-w-52 rounded-lg shadow-sm">
              <img src={assets.appointments_icon} alt="Appointments Icon" />
              <div>
                <p className="font-bold">{dashboardData.totalappointments}</p>
                <p className="text-gray-700">Appointments</p>
              </div>
            </div>
    
            <div className="flex items-center gap-2 bg-white p-4 min-w-52 rounded-lg shadow-sm">
              <img src={assets.patients_icon} alt="Students Icon" />
              <div>
                <p className="font-bold">{dashboardData.totalstudent}</p>
                <p className="text-gray-700">Students</p>
              </div>
            </div>
          </div>
    
          
          <div className="bg-white w-[700px] mt-10 border border-gray-300 rounded-md overflow-hidden shadow-sm">
    
            <div className="flex items-center gap-2.5 px-4 py-4 border-b border-gray-300 bg-gray-50">
              <img src={assets.list_icon} alt="List Icon" />
              <p className="font-medium">Latest Booking</p>
            </div>
    
            <div className="pt-4">
              {dashboardData.latestappointment
?.length > 0 ? (
                dashboardData.latestappointment
.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center px-6 py-4 gap-3 hover:bg-gray-100 transition"
                  >
                    <img
                      className="rounded-full w-10 h-10 object-cover"
                      src={item.userdata.image}
                      alt={item.userdata.name}
                    />
                    <div className="flex-1 text-sm">
                      <p className="font-semibold">{item.userdata.name}</p>
                      <p className="text-gray-500">{item.slotdate}</p>
                      <p className="text-gray-500">{item.slotTime}</p>
                    </div>
                   {
                                       item.cancelled?<p className='text-red-400 text-xs font-medium items-center p-2'>Cancel</p>:item.iscompleted?<p className='text-green-400 text-xs font-medium items-center p-2'>Complete</p>:<p className='flex '><img onClick={()=>cancelappointment(item._id)} className='w-10 cursor-pointer' src={assets.cancel_icon}></img> <img src={assets.tick_icon} className='w-10 cursor-pointer' onClick={()=>completeappointment(item._id)}></img></p>
                                      }
                  </div>
                ))
              ) : (
                <p className="text-center text-gray-400 py-6">No recent bookings</p>
              )}
            </div>
          </div>
        </div>
  )
}

export default Dashboard
