import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Vertical from './components/Vertical'
import { Route, Routes } from 'react-router-dom'
import Home from "./pages/Home"
import AddTeacher from './pages/AddTeacher'
import Appointments from './pages/Appointments'
import AllTeacher from './pages/AllTeacher'
import { ToastContainer } from 'react-toastify'
import { AdminContext } from './context/adminContext'
import Login from './pages/Login'
import { TeacherContext } from './context/teacherContext'
import Dashboard from './pages/Dashboard'
import Techappointment from './pages/Techappointment'
import TeachProfile from './pages/TeachProfile'

function App() {
  const {atoken}=useContext(AdminContext);
  const {Ttoken}=useContext(TeacherContext);

  return (
    atoken || Ttoken ?<div className=''>
    <ToastContainer/>
      <Navbar />
      <div className='flex items-start'>
           <Vertical/>
           <div className='flex-1 p-4'>
            <Routes>
              <Route path={"/home"} element={<Home/>}/>
              <Route path={"/add-teacher"} element={<AddTeacher/>}></Route>
              <Route path={"/appointment"} element={<Appointments/>}></Route>
              <Route path={"/techlist"} element={<AllTeacher/>}></Route>

              <Route path={"/dashbord"} element={<Dashboard/>}/>
              <Route path={"/tech-appointment"} element={<Techappointment/>}></Route>
              <Route path={"/tech-profile"} element={<TeachProfile/>}></Route>
              
            </Routes>
           </div>
      </div>
    </div>:<Login></Login>
  )
}

export default App
