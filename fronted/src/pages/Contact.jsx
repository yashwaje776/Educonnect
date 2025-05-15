import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const Contact = () => {
  return (
    <div className='flex flex-col pt-10 mb-10'>
      <p className='text-gray-500 text-2xl text-center'>CONTACT <span className='font-medium text-gray-800'>US</span></p>
      <div className='flex pt-10 gap-4 justify-center flex-col md:flex-row'>
          <img src={assets.contact} className='w-full md:w-1/2' alt='Contact'/>
          <div className='flex flex-col gap-6 w-full md:w-1/2'>
              <p className='font-bold text-gray-600'>OUR OFFICE</p>
              <div className='text-sm text-gray-600'>
                <p>00000 Teacher's Avenue</p>
                <p>Room 101, Education Center, Washington, USA</p>
              </div>
              <div className='text-sm text-gray-600'>
                <p>Tel: (000) 000-0000</p>
                <p>Email: support@educonnect.com</p>
              </div>
              <p className='font-bold text-gray-700'>CAREERS AT EDUCONNECT</p>
              <p className='text-sm text-gray-600'>Discover opportunities to join our teaching team and support learners.</p>
              <button className='border py-4 hover:bg-black hover:text-white text-sm w-full md:w-1/2'>Explore jobs</button>
          </div>
      </div>
    </div>
  )
}

export default Contact
