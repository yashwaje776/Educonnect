import React, { useContext, useState, useEffect } from 'react';
import axios from "axios";
import { toast } from 'react-toastify';
import { TeacherContext } from '../context/teacherContext';
import { AdminContext } from '../context/adminContext';

const Login = () => {
    const [state, setState] = useState("Admin");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { setTtoken } = useContext(TeacherContext);
    const { setatoken, backend_url } = useContext(AdminContext);

    const onsubmitHandler = async (event) => {
        event.preventDefault();
        try {
            if (state === 'Admin') {
                const { data } = await axios.post(`${backend_url}/api/admin/login`, { email: email.trim(), password: password.trim() });
                if (data.success) {
                    localStorage.setItem('atoken', data.atoken);
                    setatoken(data.atoken);
                    toast.success("Admin login successful");
                } else {
                    toast.error(data.message);
                }
            } else {
                const { data } = await axios.post(`${backend_url}/api/teacher/login`, { email: email.trim(), password: password.trim() });
                if (data.success) {
                    localStorage.setItem('Ttoken', data.Ttoken);
                    setTtoken(data.Ttoken);
                    toast.success("Teacher login successful");
                } else {
                    toast.error(data.message);
                }
            }
        } catch (error) {
            console.error("Login error:", error);
            toast.error("Login failed. Please try again.");
        }
    };

    return (
        <form onSubmit={onsubmitHandler} className="min-h-[80vh] flex items-center">
            <div className="border border-gray-100 flex flex-col items-start gap-3 m-auto p-8 min-w-[370px] rounded-xl shadow-lg text-sm text-gray-700">
                <p className="text-2xl font-semibold m-auto">
                    <span className="text-[#5F6FFF]">{state}</span> Login
                </p>

                <div className="w-full">
                    <p>Email</p>
                    <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full border border-[#DADADA] rounded py-1.5 mt-1" />
                </div>

                <div className="w-full">
                    <p>Password</p>
                    <input required type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full border border-[#DADADA] rounded py-1.5 mt-1" />
                </div>

                <button type="submit" className="w-full bg-[#5F6FFF] text-white font-medium py-2 rounded">
                    Login
                </button>

                {state === "Admin" ? (
                    <p>Teacher Login? <span onClick={() => setState("Teacher")} className="text-[#5F6FFF] underline cursor-pointer">Click here</span></p>
                ) : (
                    <p>Admin Login? <span onClick={() => setState("Admin")} className="text-[#5F6FFF] underline cursor-pointer">Click here</span></p>
                )}
            </div>
        </form>
    );
};

export default Login;
