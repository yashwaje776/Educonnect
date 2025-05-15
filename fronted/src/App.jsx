import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Contact from './pages/Contact'
import About from './pages/About'
import Home from './pages/Home'
import Teachers from './pages/Teachers'
import MyProfile from './pages/MyProfile'
import MyAppointments from './pages/MyAppointments'
import Appointment from './pages/Appointment'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <div className='mx-[10%]'>
        <ToastContainer/>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} /> 
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='/teachers' element={<Teachers />} />
          <Route path='/teachers/:speciality' element={<Teachers />} />
          <Route path='/my-profile' element={<MyProfile />} />
          <Route path='/my-appointments' element={<MyAppointments />} />
          <Route path='/appointment/:teacher_id' element={<Appointment/>} />
        </Routes>
        <Footer/>
    </div>
  )
}

export default App
