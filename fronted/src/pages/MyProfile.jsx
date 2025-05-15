import React, { useContext, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { assets } from '../assets/assets_frontend/assets';
import { Appcontext } from '../context/Appcontext';

const MyProfile = () => {
  const { userdata, setuserdata, getUserData, token, backend_url, userId } = useContext(Appcontext);
  const [isEdit, setIsEdit] = useState(false);
  const [image, setImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const updateProfile = async () => {
    try {
      const formData = new FormData();
      formData.append('userId', userId);
      formData.append('name', userdata.name);
      formData.append('phone', userdata.phone);
      formData.append('dob', userdata.dob);
      formData.append('gender', userdata.gender);
      formData.append('address', JSON.stringify(userdata.address));
      if (image) {
        formData.append('image', image);
      }

      const { data } = await axios.post(`${backend_url}/api/user/updateprofile`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          token,
        },
      });

      if (data.success) {
        toast.success(data.message);
        await getUserData();
        setIsEdit(false);
        setImage(null);
        setPreviewImage(null);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message || 'Update failed');
    }
  };

  if (!userdata) return null;

  return (
    <div className="flex flex-col gap-3 text-sm pt-5 max-w-lg mx-auto px-4">
      {isEdit ? (
        <label htmlFor="image" className="cursor-pointer">
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files[0];
              if (file) {
                setImage(file);
                setPreviewImage(URL.createObjectURL(file));
              }
            }}
            className="hidden"
          />
          <div className="relative w-36 h-36">
            <img
              src={previewImage || userdata.image || assets.profile_pic}
              className="w-full h-full object-cover rounded"
              alt="profile"
            />
            <img
              src={assets.upload_icon}
              className="absolute inset-0 w-full h-full object-contain opacity-0 hover:opacity-100 transition-opacity duration-200"
              alt="upload"
            />
          </div>
        </label>
      ) : (
        <img
          src={userdata.image || assets.profile_pic}
          className="w-36 h-36 object-cover rounded"
          alt="profile"
        />
      )}

      {isEdit ? (
        <input
          type="text"
          className="text-3xl font-medium"
          value={userdata.name}
          onChange={(e) => setuserdata((prev) => ({ ...prev, name: e.target.value }))}
        />
      ) : (
        <p className="text-3xl font-medium">{userdata.name}</p>
      )}

      <hr className="bg-gray-600" />

      <div className="flex flex-col gap-2 pt-4">
        <p className="text-gray-500 text-sm underline">CONTACT INFORMATION</p>
        <p className="flex gap-4 font-medium">
          Email id: <span className="text-blue-500">{userdata.email}</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
          <p className="font-medium">Phone:</p>
          {isEdit ? (
            <input
              type="text"
              value={userdata.phone}
              onChange={(e) => setuserdata((prev) => ({ ...prev, phone: e.target.value }))}
            />
          ) : (
            <p className="text-blue-500">{userdata.phone}</p>
          )}
        </div>

        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
          <p className="font-medium">Address:</p>
          {isEdit ? (
            <input
              type="text"
              value={userdata.address?.line1 || ''}
              onChange={(e) =>
                setuserdata((prev) => ({
                  ...prev,
                  address: { ...prev.address, line1: e.target.value },
                }))
              }
            />
          ) : (
            <p>{userdata.address?.line1 || ''}</p>
          )}
        </div>
      </div>

      <div className="flex flex-col mt-4 gap-3">
        <p className="text-gray-500 text-sm underline">BASIC INFORMATION</p>

        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
          <p className="font-medium">Gender:</p>
          {isEdit ? (
            <select
              value={userdata.gender}
              onChange={(e) => setuserdata((prev) => ({ ...prev, gender: e.target.value }))}
            >
              <option value="not selected">Not selected</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          ) : (
            <p>{userdata.gender}</p>
          )}
        </div>

        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
          <p className="font-medium">Birthdate:</p>
          {isEdit ? (
            <input
              type="date"
              value={userdata.dob}
              onChange={(e) => setuserdata((prev) => ({ ...prev, dob: e.target.value }))}
            />
          ) : (
            <p>{userdata.dob}</p>
          )}
        </div>
      </div>

      {isEdit ? (
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <button
            className="text-sm border border-blue-400 w-full sm:w-[200px] py-2 px-3 rounded-full"
            onClick={updateProfile}
          >
            Save Information
          </button>
          <button
            className="text-sm border border-gray-300 w-full sm:w-[200px] py-2 px-3 rounded-full"
            onClick={() => setIsEdit(false)}
          >
            Cancel
          </button>
        </div>
      ) : (
        <button
          className="text-sm border border-blue-400 w-full sm:w-[200px] py-2 px-3 rounded-full mt-4"
          onClick={() => setIsEdit(true)}
        >
          Edit
        </button>
      )}
    </div>
  );
};

export default MyProfile;
