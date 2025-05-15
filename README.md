# EduConnect


EduConnect is a smart and efficient Teacher Appointment Booking System designed to simplify and streamline communication between students and teachers. It enables students to easily book appointments with their teachers based on availability, while teachers can manage their schedules and appointments with ease. EduConnect bridges the gap in academic interactions and promotes a well-organized environment for academic support and mentorship.

---

## Features

- ✅ User registration and login for students and teachers  
- ✅ Teachers can manage their availability and appointments  
- ✅ Students can view teacher profiles and book appointments  
- ✅ Appointment management: view, cancel, and mark completed  
- ✅ Payment integration via Razorpay in test mode (for development)  
- ✅ Notifications on appointment status and payment updates  
- ✅ Responsive UI built with React  
- ✅ Backend REST API with Node.js and Express  
- ✅ Data storage using MongoDB  

---

## Payment Feature

- Integrated Razorpay payment gateway for secure online payments  
- Currently running in Razorpay Test Mode for development and testing  
- No real transactions occur in test mode; use the provided test keys  
- Payment success and failure scenarios can be simulated safely  
- To go live, replace the Razorpay test key with your production key  

---

## Technology Stack

| Frontend               | Backend           | Database  | Payment Gateway       |
|------------------------|-------------------|-----------|----------------------|
| React, Redux Toolkit, CSS | Node.js, Express | MongoDB   | Razorpay (Test Mode)  |

---

Installation and Setup

Clone the repository

git clone https://github.com/yashwaje776/Educonnect.git
cd Educonnect
Install backend dependencies
cd backend
npm install
Install frontend dependencies
cd ../frontend
npm install

Environment Variables
Create .env files in both backend and frontend folders as shown below.

Backend .env example (backend/.env)

PORT=3000
MONGODB_URL="mongodb+srv://yashwaje:yashwaje@cluster0.fg9p8am.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0" 

CLOUDNAME="di9o2mqwx"

CLOUD_API_KEY="147695286815586"

SECRET_KEY="jK9ymIkBjpfdE7bfk8xdptKToP8"

ADMIN_EMAIL="abc@gmail.com"

ADMIN_PASSWORD="1234567890"

JWT_SECRET="123456789"

RAZORPAY_KEY_ID="rzp_test_OZTmZAy2h8Wt1Y"

RAZORPAY_KEY_SECRET="Ux292yaedaQLydd4A2M2G3qZ"

Frontend .env example (frontend/.env)

VITE_BACKEND_URL="http://localhost:3000"

REACT_APP_RAZORPAY_KEY_ID="rzp_test_OZTmZAy2h8Wt1Y"


Running the Project

Run the backend server
cd backend
npm run dev

Run the frontend server
cd ../frontend
npm start
Open your browser and visit: http://localhost:3000


Usage
Register as a student or teacher

Teachers can set their availability and manage appointments

Students can book appointments with teachers and view details

Pay for appointments using Razorpay test payments

View appointment history and statuses

