import React from 'react'
import { assets } from '../assets/assets_frontend/assets'
const Hero = () => {
  return (
    <div className='flex justify-between items-center bg-[#6ada79] rounded-xl shadow-lg '>
        <div className='flex flex-col items-start justify-between gap-4 p-20'>
            <p className='text-white text-5xl font-semibold leading-tight '>Book Your Learning Session<br></br> with Verified Teachers</p>
            <div className='flex gap-4 text-sm text-white items-center'>
                <img src={assets.group_profiles} className='w-28'></img>
                <p>Simply browse through our extensive list of trusted teachers, schedule your session hassle-free.</p>
            </div>
            <a href='#speciality' className='flex gap-2 bg-white px-8 py-3 rounded-full text-gray-500 text-sm'>Book appointment<img src={assets.arrow_icon}></img></a>
        </div>
        <div className='w-1/2 realative pr-20'>
            <img src={assets.hero} className='relative bottom-[-56px]  h-[350px]'></img>
        </div>
    </div>
  )
}

export default Hero
