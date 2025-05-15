import React, { useContext, useEffect } from 'react';
import { assets } from '../assets/assets';
import { AdminContext } from '../context/adminContext';

const Home = () => {
  const { atoken, dashboardData, getdashboardData, cancelAppointment } = useContext(AdminContext);

  useEffect(() => {
    if (atoken) {
      getdashboardData();
      console.log(dashboardData);
    }
  }, [atoken]);

  return dashboardData && (
    <div className="m-5 overflow-y-scroll max-h-[80vh]">
      
      <div className="flex flex-wrap gap-3 ">
        <div className="flex items-center gap-2 bg-white p-4 min-w-52 rounded-lg shadow-sm">
          <img src={assets.doctor_icon} alt="Doctor Icon" />
          <div>
            <p className="font-bold">{dashboardData.teacherscnt}</p>
            <p className="text-gray-700">Teachers</p>
          </div>
        </div>

        <div className="flex items-center gap-2 bg-white p-4 min-w-52 rounded-lg shadow-sm">
          <img src={assets.appointments_icon} alt="Appointments Icon" />
          <div>
            <p className="font-bold">{dashboardData.appointmentcnt}</p>
            <p className="text-gray-700">Appointments</p>
          </div>
        </div>

        <div className="flex items-center gap-2 bg-white p-4 min-w-52 rounded-lg shadow-sm">
          <img src={assets.patients_icon} alt="Students Icon" />
          <div>
            <p className="font-bold">{dashboardData.studentscnt}</p>
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
          {dashboardData.appointment?.length > 0 ? (
            dashboardData.appointment.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center px-6 py-4 gap-3 hover:bg-gray-100 transition"
              >
                <img
                  className="rounded-full w-10 h-10 object-cover"
                  src={item.techdata.image}
                  alt={item.techdata.name}
                />
                <div className="flex-1 text-sm">
                  <p className="font-semibold">{item.techdata.name}</p>
                  <p className="text-gray-500">{item.slotdate}</p>
                  <p className="text-gray-500">{item.slotTime}</p>
                </div>
                {item.cancelled ? (
                  <p className="text-red-500 text-xs font-medium">Cancelled</p>
                ) : (
                  <img
                    className="w-10 h-10 cursor-pointer"
                    src={assets.cancel_icon}
                    alt="Cancel"
                    onClick={() => cancelAppointment(item._id)} 
                  />
                )}
              </div>
            ))
          ) : (
            <p className="text-center text-gray-400 py-6">No recent bookings</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
