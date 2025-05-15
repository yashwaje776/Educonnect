import React, { useContext } from 'react';
import { Appcontext } from '../context/Appcontext';
import axios from 'axios';
import { toast } from 'react-toastify';

const MyAppointments = () => {
  const {
    appointmentdata,
    backend_url,
    token,
    getallAppointment,
  } = useContext(Appcontext);

  const cancelledappointment = async (appointmentId) => {
    try {
      const { data } = await axios.post(
        `${backend_url}/api/user/cancelledappointment`,
        { appointmentId },
        {
          headers: { token },
        }
      );

      if (data.success) {
        toast.success(data.message);
        await getallAppointment(); 
      }
    } catch (error) {
      toast.error("Failed to cancel appointment.");
    }
  };

  const handlePayment = async (appointmentId) => {
    if (!window.Razorpay) {
      alert("Razorpay SDK not loaded.");
      return;
    }

    try {
      const { data } = await axios.post(`${backend_url}/create-payment`, {
        appointmentId,
      });

      if (data.success) {
        const options = {
          key: "rzp_test_OZTmZAy2h8Wt1Y",
          amount: data.order.amount,
          currency: "INR",
          name: "My App",
          description: "Appointment Payment",
          order_id: data.order.id,
          handler: async (response) => {
            const verifyRes = await axios.post(`${backend_url}/verify-payment`, {
              ...response,
              appointmentId,
            });

            if (verifyRes.data.success) {
              toast.success("Payment Successful!");
              await getallAppointment(); 
            } else {
              toast.error("Payment verification failed.");
            }
          },
          prefill: {
            name: "John Doe",
            email: "johndoe@example.com",
            contact: "9876543210",
          },
          theme: { color: "#3399cc" },
        };

        const rzp = new window.Razorpay(options);
        rzp.open();
      } else {
        toast.error("Payment request failed.");
      }
    } catch (error) {
      toast.error("Error processing payment.");
    }
  };

  return (
    <div className="p-3">
      <h2 className="mt-12 mb-4 text-xl font-semibold text-gray-800 border-b pb-2">
        My Appointments
      </h2>

      <div className="space-y-4">
        {appointmentdata.reverse().map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6 p-4 rounded-lg shadow-md bg-gray-200"
          >
            <div className="shrink-0">
              <img
                src={item.techdata.image}
                alt={item.techdata.name}
                className="w-32 h-32 object-cover rounded-md"
              />
            </div>

            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-800">
                {item.techdata.name}
              </h3>
              <p className="text-sm text-gray-500 font-bold">
                Subject:{" "}
                <span className="font-medium">{item.techdata.speciality}</span>
              </p>

              <div className="mt-2 text-sm text-gray-600">
                <p className="font-medium">Address:</p>
                <p>{item.techdata.address.line1}</p>
              </div>

              <div className="mt-2 text-sm text-gray-600">
                <p className="font-medium">
                  Date & Time:{" "}
                  <span className="font-normal">
                    {item.slotdate} | {item.slotTime}
                  </span>
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-2 mt-4 sm:mt-0 sm:justify-end sm:items-end sm:self-end">
              {!item.cancelled && !item.payment && !item.iscompleted &&(
                <>
                  <button
                    onClick={() => handlePayment(item._id)}
                    className="text-sm cursor-pointer text-gray-600 border py-2 px-4 rounded hover:bg-indigo-600 hover:text-white transition"
                  >
                    Pay Online
                  </button>
                  <button
                    onClick={() => cancelledappointment(item._id)}
                    className="text-sm cursor-pointer text-red-600 border py-2 px-4 rounded hover:bg-red-600 hover:text-white transition"
                  >
                    Cancel Appointment
                  </button>
                </>

              )}
              {
                item.iscompleted ?<p  className="text-sm text-green-500">completed</p>:""
              }

              {item.cancelled && (
                <button
                  className="text-sm bg-red-600 text-white py-2 px-4 rounded cursor-not-allowed"
                  disabled
                >
                  Appointment Cancelled
                </button>
              )}

              {item.payment &&  (
                <button
                  className="text-sm bg-green-600 text-white py-2 px-4 rounded cursor-not-allowed"
                  disabled
                >
                  Paid
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAppointments;
