import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import AdminContextProvider from './context/adminContext.jsx'
import TeacherContextProvider from './context/teacherContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AdminContextProvider>
      <TeacherContextProvider>
        <App />
      </TeacherContextProvider>
    </AdminContextProvider>
  </BrowserRouter>,
)
