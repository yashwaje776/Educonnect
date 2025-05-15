import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { assets } from '../assets/assets';
import { AdminContext } from '../context/adminContext';
import { TeacherContext } from '../context/teacherContext';

const Vertical = () => {
  const {atoken}=useContext(AdminContext);
  const {Ttoken}=useContext(TeacherContext);
  return (
    <div className="min-h-screen  border-r border-gray-300 shadow-md">{
      atoken ?<div className="flex flex-col items-center py-6">
        <NavLink to="/home" className="flex items-center gap-4 py-3.5 px-4 md:min-w-72 cursor-pointer md:px-10 transition duration-300 hover:bg-gray-200 rounded-lg">
          <img src={assets.home_icon} className="w-6" alt="Dashboard" />
          <p className="hidden md:block text-gray-700 font-medium">Dashboard</p>
        </NavLink>

        <NavLink
          to="/appointment"
          className="flex items-center gap-4 py-3.5 px-4 md:min-w-72 cursor-pointer md:px-10 transition duration-300 hover:bg-gray-200 rounded-lg"
        >
          <img src={assets.appointment_icon} className="w-6" alt="Appointments" />
          <p className="hidden md:block text-gray-700 font-medium">Appointments</p>
        </NavLink>

        <NavLink
          to="/add-teacher"
          className="flex items-center gap-4 py-3.5 px-4 md:min-w-72 cursor-pointer md:px-10 transition duration-300 hover:bg-gray-200 rounded-lg"
        >
          <img src={assets.add_icon} className="w-6" alt="Add Teacher" />
          <p className="hidden md:block text-gray-700 font-medium">Add Teacher</p>
        </NavLink>

        <NavLink
          to="/techlist"
          className="flex items-center gap-4 py-3.5 px-4 md:min-w-72 cursor-pointer md:px-10 transition duration-300 hover:bg-gray-200 rounded-lg"
        >
          <img src={assets.people_icon} className="w-6" alt="Teacher List" />
          <p className="hidden md:block text-gray-700 font-medium">Teacher List</p>
        </NavLink>
      </div>:""}
      {Ttoken?<div className="flex flex-col items-center py-6">
        <NavLink to="/dashbord" className="flex items-center gap-4 py-3.5 px-4 md:min-w-72 cursor-pointer md:px-10 transition duration-300 hover:bg-gray-200 rounded-lg">
          <img src={assets.home_icon} className="w-6" alt="Dashboard" />
          <p className="hidden md:block text-gray-700 font-medium">Dashboard</p>
        </NavLink>
        <NavLink
          to="/tech-profile"
          className="flex items-center gap-4 py-3.5 px-4 md:min-w-72 cursor-pointer md:px-10 transition duration-300 hover:bg-gray-200 rounded-lg"
        >
          <img src={assets.add_icon} className="w-6" alt="Add Teacher" />
          <p className="hidden md:block text-gray-700 font-medium">Teacher Profile</p>
        </NavLink>
        <NavLink
          to="/tech-appointment"
          className="flex items-center gap-4 py-3.5 px-4 md:min-w-72 cursor-pointer md:px-10 transition duration-300 hover:bg-gray-200 rounded-lg"
        >
          <img src={assets.appointment_icon} className="w-6" alt="Appointments" />
          <p className="hidden md:block text-gray-700 font-medium">Appointments</p>
        </NavLink>       
      </div>:""
    }
    </div>
  );
};

export default Vertical;