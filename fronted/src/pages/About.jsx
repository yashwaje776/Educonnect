import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const About = () => {
  return (
    <div className='flex flex-col pt-10'>
        <p className='text-gray-500 text-2xl text-center'>ABOUT <span className='font-medium text-gray-800'>US</span></p>
        <div className='flex pt-10 gap-4'>
           <img src={assets.about} className='w-1/3'></img>
           <div className='flex flex-col text-sm text-gray-600 gap-4 justify-center '>
              <p>Welcome to EduConnect, your reliable partner in managing and scheduling teacher appointments with ease. At EduConnect, we recognize the importance of efficient communication between students and teachers, and we're here to make that process simpler, faster, and more organized.</p>
              <p>EduConnect is dedicated to leveraging innovative technology to enhance the learning experience. We are constantly improving our platform, integrating cutting-edge features to streamline scheduling and facilitate better interaction. Whether you're booking your first tutoring session or managing ongoing academic support, EduConnect is here to assist you every step of the way.</p>
              <p className='font-medium text-gray-800'>Our Vision</p>
              <p>Our vision at EduConnect is to create a seamless educational experience for every student and teacher. We strive to bridge the gap between learners and educators, ensuring that you can access the support you need at the right time.</p>
          </div>
        </div>
        <p className='pt-10 text-2xl'>WHY <span className='font-medium text-gray-700'>CHOOSE US</span></p>
        <div className='flex pt-10 text-gray-600 mb-20'>
          <div className='flex flex-col px-14 py-16 border border-gray-300 text-sm gap-4 hover:bg-[#5f6fff] hover:text-white'>
                <p className='font-medium '>EFFICIENCY:</p>
                <p >Effortless appointment scheduling that fits into your busy academic schedule.</p>
          </div>
          <div className='flex flex-col px-14 py-16 border border-gray-300 text-sm gap-4 hover:bg-[#5f6fff] hover:text-white'>
                <p className='font-medium '>CONVENIENCE:</p>
                <p >Access to a network of dedicated teachers and tutors, available when you need them.</p>

          </div>
          <div className='flex flex-col px-14 py-16 border border-gray-300 text-sm gap-4 hover:bg-[#5f6fff] hover:text-white'>
                <p className='font-medium '>PERSONALIZATION:</p>
                <p >Customized session reminders and recommendations to help you stay on track with your learning goals.</p>
          </div>
        </div>
    </div>
  )
}

export default About
