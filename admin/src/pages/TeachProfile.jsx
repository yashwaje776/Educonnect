import React, { useContext, useState } from 'react'
import { TeacherContext } from '../context/teacherContext'

const TeachProfile = () => {
  const {teacherprofile}=useContext(TeacherContext);
  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
  <div className="flex flex-col sm:flex-row items-center sm:items-start">
    <img
      src={teacherprofile.image}
      alt="Profile"
      className="w-40 h-40 object-cover rounded-lg shadow-md mb-4 sm:mb-0 sm:mr-6"
    />
    <div>
      <h2 className="text-2xl font-bold text-gray-800">{teacherprofile.name}</h2>
      <p className="text-gray-600"><span className="font-semibold">Email:</span> {teacherprofile.email}</p>
      <p className="text-gray-600"><span className="font-semibold">Speciality:</span> {teacherprofile.speciality}</p>
    </div>
  </div>

  <div className="border-t border-gray-200 my-6"></div>

  <div className="space-y-4">
    <div>
      <h5 className="text-lg font-semibold text-gray-700">About</h5>
      <p className="text-gray-600">{teacherprofile.about}</p>
    </div>
    <div>
      <h5 className="text-lg font-semibold text-gray-700">Degree</h5>
      <p className="text-gray-600">{teacherprofile.degree}</p>
    </div>
    <div>
      <h5 className="text-lg font-semibold text-gray-700">Experience</h5>
      <p className="text-gray-600">{teacherprofile.experience}</p>
    </div>
    <div>
      <h5 className="text-lg font-semibold text-gray-700">Address</h5>
      <p className="text-gray-600">{teacherprofile.address?.line1}</p>
    </div>
  </div>
</div>
  )
}

export default TeachProfile
