import React from 'react'
import { assets } from '../assets/assets_frontend/assets'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <div className='flex justify-between items-center bg-[#6ada79] rounded-xl shadow-lg mt-20 mb-20 '>
            <div className='flex flex-col items-start justify-between gap-4 p-20'>
                <p className='text-white text-5xl font-semibold leading-tight '>Book Appointment <br></br> With 100+ Trusted  Teachers</p>
                <Link to={'/login'}>
                    <button className='text-gray-500 bg-white rounded-full  px-6 py-3 cursor-pointer'>Create account</button>
                </Link>
            </div>
            <div className='w-1/2 realative pr-20'>
                <img src={assets.homeimg} className=''></img>
            </div>
        </div>
  )
}

export default Banner
