import React, { useContext, useEffect, useState } from "react";
import { Appcontext } from "../context/Appcontext";
import { useParams, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets_frontend/assets";
import axios from "axios";
import { toast } from "react-toastify";

const Appointment = () => {
  const { teachers, getallTeacher, token, backend_url } = useContext(Appcontext);
  const { teacher_id } = useParams();
  const navigate = useNavigate();
  const [techData, setTechData] = useState(null);
  const [techslot, setTechslot] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState("");
  const daysOfweek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  const getAvailableSlots = async () => {
    if (!techData || !techData.slots_booked) return;

    const allSlots = [];
    const today = new Date();

    for (let i = 0; i < 7; i++) {
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);
      let endTime = new Date(currentDate);
      endTime.setHours(21, 0, 0, 0);

      if (i === 0) {
        const now = new Date();
        currentDate.setHours(now.getHours() > 10 ? now.getHours() + 1 : 10);
        currentDate.setMinutes(now.getMinutes() > 30 ? 0 : 30);
      } else {
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }

      let daySlots = [];
      const day = currentDate.getDate();
      const month = currentDate.getMonth() + 1;
      const year = currentDate.getFullYear();
      const slotdate = `${day}_${month}_${year}`;

      while (currentDate < endTime) {
        const currentTime = currentDate.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

        if (!techData.slots_booked[slotdate]?.includes(currentTime)) {
          daySlots.push({
            datetime: new Date(currentDate),
            time: currentTime,
          });
        }
        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }

      allSlots.push(daySlots);
    }
    setTechslot(allSlots);
  };

  const bookappointment = async () => {
    if (!token) {
      toast.warn("Login to book an appointment");
      return navigate("/login");
    }

    if (!slotTime) {
      toast.warn("Please select a time slot");
      return;
    }

    try {
      const selectedSlot = techslot[slotIndex][0];
      if (!selectedSlot) {
        toast.error("Invalid slot selection");
        return;
      }

      const date = selectedSlot.datetime;
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      const slotdate = `${day}_${month}_${year}`;

      const { data } = await axios.post(
        `${backend_url}/api/user/bookappointment`,
        { techId: teacher_id, slotTime, slotdate },
        { headers: { token } }
      );

      if (data.success) {
        toast.success(data.message);
        getallTeacher();
        navigate("/my-appointments");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (teacher_id && teachers?.length) {
      const match = teachers.find((item) => item._id.toLowerCase() === teacher_id.toLowerCase());
      if (match) {
        setTechData(match);
      }
    }
  }, [teacher_id, teachers]);

  useEffect(() => {
    if (techData) {
      getAvailableSlots();
    }
  }, [techData]);

  return (
    techData && (
      <div>
        <div className="flex justify-between gap-4">
          <img src={techData.image} className="max-w-72 bg-[#5f6fff] rounded-lg" alt="teacher" />
          <div className="flex-1 border gap-4 border-gray-400 rounded-xl w-6">
            <div className="px-8 py-6">
              <p className="flex gap-2 text-2xl font-medium">
                {techData.name} <img src={assets.verified_icon} alt="verified" />
              </p>
              <div className="flex gap-2 pt-4 text-gray-700 font-medium">
                <p>{techData.degree} -</p>
                <p>{techData.speciality}</p>
                <p>{techData.experience}</p>
              </div>
              <p className="text-sm font-medium pt-3 flex gap-2 items-center">
                About <img src={assets.info_icon} className="w-3" alt="info" />
              </p>
              <p className="text-sm pt-3 font-xl text-gray w-2/3">{techData.about}</p>
              <p className="pt-4 font-medium">Appointment fees : ${techData.fees}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col ml-76 gap-6 mt-8">
          <p className="text-gray-700 font-medium">Booking slots</p>
          <div className="flex gap-4">
            {techslot.length > 0 &&
              techslot.map((item, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col py-6 px-4 border text-center rounded-full w-[70px] border-gray-300 cursor-pointer ${
                    slotIndex === idx ? "bg-[#5f6fff] text-white" : "text-gray-700 border border-gray-200"
                  }`}
                  onClick={() => setSlotIndex(idx)}
                >
                  <p className="font-medium">{item[0] && daysOfweek[item[0].datetime.getDay()]}</p>
                  <p className="font-medium">{item[0] && item[0].datetime.getDate()}</p>
                </div>
              ))}
          </div>
          <div className="flex items-center w-full overflow-x-auto gap-4">
            {techslot.length > 0 &&
              techslot[slotIndex]?.map((item, idx) => (
                <div
                  key={idx}
                  className={`flex gap-4 items-center rounded-full px-4 py-1 border border-gray-300 cursor-pointer ${
                    item.time === slotTime ? "bg-[#5f6fff] text-white" : "text-gray-500 border border-gray-200"
                  }`}
                  onClick={() => setSlotTime(item.time)}
                >
                  <p className="whitespace-nowrap">{item.time.toLowerCase()}</p>
                </div>
              ))}
          </div>

          <button onClick={bookappointment} className="py-2 px-4 bg-[#5f6fff] w-[250px] rounded-full text-white cursor-pointer">
            Book an appointment
          </button>
        </div>
      </div>
    )
  );
};

export default Appointment;