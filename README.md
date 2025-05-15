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

| Frontend                | Backend            | Database  | Payment Gateway         |
|-------------------------|--------------------|-----------|------------------------|
| React, Redux Toolkit, CSS | Node.js, Express  | MongoDB   | Razorpay (Test Mode)    |

---

## Installation and Setup

### Clone the repository

```bash
git clone https://github.com/yashwaje776/Educonnect.git
cd Educonnect
Install backend dependencies
bash
Copy
Edit
cd backend
npm install
Install frontend dependencies
bash
Copy
Edit
cd ../frontend
npm install
Set up environment variables
Create .env files in both backend and frontend folders as below.

Backend .env example (backend/.env)
env
Copy
Edit
PORT=3000
MONGODB_URL="your_mongodb_connection_string"
CLOUDNAME="your_cloudinary_cloud_name"
CLOUD_API_KEY="your_cloudinary_api_key"
SECRET_KEY="your_cloudinary_api_secret"
ADMIN_EMAIL="admin_email@example.com"
ADMIN_PASSWORD="your_admin_password"
JWT_SECRET="your_jwt_secret_key"

RAZORPAY_KEY_ID="your_razorpay_test_key_id"
RAZORPAY_KEY_SECRET="your_razorpay_test_key_secret"
PORT: Port for backend server (default 3000)

MONGODB_URL: MongoDB connection string

CLOUDNAME, CLOUD_API_KEY, SECRET_KEY: Cloudinary credentials for image uploads

ADMIN_EMAIL, ADMIN_PASSWORD: Admin user credentials

JWT_SECRET: JWT authentication secret

RAZORPAY_KEY_ID, RAZORPAY_KEY_SECRET: Razorpay API keys (test mode)

Frontend .env example (frontend/.env)
env
Copy
Edit
VITE_BACKEND_URL="http://localhost:3000"
REACT_APP_RAZORPAY_KEY_ID="your_razorpay_test_key_id"
VITE_BACKEND_URL: Backend server URL

REACT_APP_RAZORPAY_KEY_ID: Razorpay test key ID for payment integration

Run the backend server
bash
Copy
Edit
cd backend
npm run dev
Run the frontend server
bash
Copy
Edit
cd ../frontend
npm start
Open your browser and visit: http://localhost:3000

Usage
Register as a student or teacher

Teachers can set their availability and manage appointments

Students can book appointments with teachers and view details

Pay for appointments using Razorpay test payments

View appointment history and statuses
