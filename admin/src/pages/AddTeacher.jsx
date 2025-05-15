import React, { useContext, useState } from 'react';
import { AdminContext } from '../context/adminContext';
import { toast } from 'react-toastify';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddTeacher = () => {
  const [Techimg, settechimg] = useState(null);
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [Password, setPassword] = useState('');
  const [fees, setfees] = useState('');
  const [experience, setexperience] = useState('');
  const [speciality, setspeciality] = useState('');
  const [degree, setdegree] = useState('');
  const [addline1, setaddline1] = useState('');
  const [about, setabout] = useState('');

  const { atoken, backend_url } = useContext(AdminContext);

  const submithandler = async (e) => {
    e.preventDefault();
    try {
      if (!Techimg) {
        return toast.error('Image is not selected');
      }
      const formData = new FormData();
      formData.append('image', Techimg);
      formData.append('name', name);
      formData.append('email', email);
      formData.append('password', Password);
      formData.append('fees', Number(fees));
      formData.append('experience', experience);
      formData.append('speciality', speciality);
      formData.append('degree', degree);
      formData.append('address', JSON.stringify({ line1: addline1 }));
      formData.append('about', about);

      const { data } = await axios.post(`${backend_url}/api/admin/add-teacher`, formData, {
        headers: { atoken },
      });

      if (data.success) {
        toast.success(data.message);
        settechimg(null);
        setname('');
        setemail('');
        setPassword('');
        setfees('');
        setexperience('');
        setspeciality('');
        setdegree('');
        setaddline1('');
        setabout('');
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Something went wrong');
    }
  };

  return (
    <form className="m-5 w-full" onSubmit={submithandler}>
      <p className="font-medium text-lg mb-3">Add Teacher</p>
      <div className="border border-gray-300 bg-white px-8 py-8 rounded w-full max-w-4xl max-h-[80vh] overflow-y-scroll">
        <div className="flex items-center mb-8 text-gray-600 gap-4">
          <label htmlFor="Tech-img">
            <img className="w-[64px]" src={Techimg ? URL.createObjectURL(Techimg) : assets.upload_area} />
          </label>
          <input onChange={(e) => settechimg(e.target.files[0])} type="file" id="Tech-img" hidden />
          <p>Upload Teacher<br />picture</p>
        </div>

        <div className="text-gray-600 flex items-start gap-10">
          <div className="w-full flex-1 flex-col gap-5">
            <div className="w-full flex-1 flex-col gap-1">
              <p>Your name</p>
              <input onChange={(e) => setname(e.target.value)} value={name} className="text-gray-600 border border-gray-300 w-full m-1 p-1 rounded" type="text" placeholder="Name" />
            </div>
            <div className="w-full flex-1 flex-col gap-1">
              <p>Teacher Email</p>
              <input onChange={(e) => setemail(e.target.value)} value={email} className="text-gray-600 border border-gray-300 w-full m-1 p-1 rounded" type="email" placeholder="Email" />
            </div>
            <div className="w-full flex-1 flex-col gap-1">
              <p>Teacher Password</p>
              <input onChange={(e) => setPassword(e.target.value)} value={Password} className="text-gray-600 border border-gray-300 w-full m-1 p-1 rounded" type="text" placeholder="Password" />
            </div>
            <div className="w-full flex-1 flex-col gap-1">
              <p>Experience</p>
              <select onChange={(e) => setexperience(e.target.value)} value={experience} className="text-gray-600 border border-gray-300 w-full m-1 p-1 rounded">
                <option value="">Select</option>
                <option value="1 Year">1 Year</option>
                <option value="2 Year">2 Year</option>
                <option value="3 Year">3 Year</option>
                <option value="4 Year">4 Year</option>
                <option value="5 Year">5 Year</option>
                <option value="6 Year">6 Year</option>
                <option value="7 Year">7 Year</option>
                <option value="8 Year">8 Year</option>
              </select>
            </div>
            <div className="w-full flex-1 flex-col gap-1">
              <p>Fees</p>
              <input onChange={(e) => setfees(e.target.value)} value={fees} type="number" className="text-gray-600 border border-gray-300 w-full m-1 p-1 rounded" placeholder="Teacher Fees" />
            </div>
          </div>

          <div className="flex-1 flex-col gap-5">
            <div className="w-full flex-1 flex-col gap-1">
              <p>Speciality</p>
              <select onChange={(e) => setspeciality(e.target.value)} value={speciality} className="text-gray-600 border border-gray-300 w-full m-1 p-1 rounded">
                <option value="">Select</option>
                <option value="Mathematics">Mathematics</option>
                <option value="Physics">Physics</option>
                <option value="Chemistry">Chemistry</option>
                <option value="Biology">Biology</option>
                <option value="History">History</option>
              </select>
            </div>
            <div className="w-full flex-1 flex-col gap-1">
              <p>Degree</p>
              <input onChange={(e) => setdegree(e.target.value)} value={degree} className="text-gray-600 border border-gray-300 w-full m-1 p-1 rounded" type="text" placeholder="Degree" />
            </div>
            <div className="w-full flex-1 flex-col gap-1">
              <p>Address</p>
              <input onChange={(e) => setaddline1(e.target.value)} value={addline1} className="text-gray-600 border border-gray-300 w-full m-1 p-1 rounded" type="text" placeholder="Address" />
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-5">
          <p>About Teacher</p>
          <textarea onChange={(e) => setabout(e.target.value)} value={about} className="text-gray-600 border border-gray-300 w-full m-1 p-1 rounded" rows={6} placeholder="Write about teacher"></textarea>
        </div>
        <button className="bg-[#5F6FFF] rounded-lg mt-5 px-5 py-2 text-white">ADD Teacher</button>
      </div>
    </form>
  );
};

export default AddTeacher;
