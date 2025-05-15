import React from 'react'
import { assets } from '../assets/assets_frontend/assets'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='flex sm:grid grid-cols-[3fr_1fr_1fr] gap-4 py-20'>
        <div className='flex flex-col'>
            <img src={assets.logo} className='w-36'></img>
            <p className='w-2/3 text-sm text-gray-600 py-4'>EduConnect is a smart and efficient Teacher Appointment Booking System designed to simplify and streamline communication between students and teachers. It enables students to easily book appointments with their teachers based on availability, while teachers can manage their schedules and appointments with ease. EduConnect bridges the gap in academic interactions and promotes a well-organized environment for academic support and mentorship.</p>
        </div>
        <div className='flex flex-col gap-4'>
            <p className='font-medium text-2xl'>COMPANY</p>
            <ul className='flex flex-col text-sm text-gray-600'>
                <NavLink to='/'>
                               <li className='py-1'>HOME</li>
                               
                </NavLink>
                <NavLink to='/about'>
                                <li className='py-1'>ABOUT</li>
                               
                            </NavLink>
                            <NavLink to='/contact'>
                                <li className='py-1'>CONTACT</li>
                            
                            </NavLink>
                
            </ul>
        </div>
        <div className='flex flex-col gap-4 '>
            <p className='font-medium text-2xl'>GET IN TOUCH</p>
            <ul className='flex flex-col text-sm text-gray-600'>
               <li>
               +91-000-000-000
                </li>
                <li>
                +91-000-000-000
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Footer
