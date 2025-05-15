# EduConnect
EduConnect is a smart and efficient Teacher Appointment Booking System designed to simplify and streamline communication between students and teachers. It enables students to easily book appointments with their teachers based on availability, while teachers can manage their schedules and appointments with ease. EduConnect bridges the gap in academic interactions and promotes a well-organized environment for academic support and mentorship.

Features
✅ User registration and login for students and teachers
✅ Teachers can manage their availability and appointments
✅ Students can view teacher profiles and book appointments
✅ Appointment management: view, cancel, and mark completed
✅ Payment integration via Razorpay in test mode (for development)
✅ Notifications on appointment status and payment updates
✅ Responsive UI built with React
✅ Backend REST API with Node.js and Express
✅ Data storage using MongoDB

Payment Feature
Integrated Razorpay payment gateway for secure online payments
Currently running in Razorpay Test Mode for development and testing
No real transactions occur in test mode; use the provided test keys
Payment success and failure scenarios can be simulated safely
To go live, replace the Razorpay test key with your production key

Technology Stack
Frontend: React, Redux Toolkit, CSS
Backend: Node.js, Express
Database: MongoDB
Payment Gateway: Razorpay (Test Mode)

Installation and Setup
Clone the repository:

bash
Copy
Edit
git clone https://github.com/yashwaje776/Educonnect.git
cd Educonnect
Install backend dependencies:

bash
Copy
Edit
cd backend
npm install
Install frontend dependencies:

bash
Copy
Edit
cd ../frontend
npm install
Set up environment variables:

Backend .env example:

ini
Copy
Edit
MONGODB_URI=your_mongodb_connection_string
RAZORPAY_KEY_ID=rzp_test_xxxxxxx
RAZORPAY_KEY_SECRET=your_razorpay_secret
JWT_SECRET=your_jwt_secret
Frontend .env example:

ini
Copy
Edit
REACT_APP_BACKEND_URL=http://localhost:5000
REACT_APP_RAZORPAY_KEY_ID=rzp_test_xxxxxxx
Run backend server:

bash
Copy
Edit
cd ../backend
npm run dev
Run frontend server:

bash
Copy
Edit
cd ../frontend
npm start
Open your browser and go to:

arduino
Copy
Edit
http://localhost:3000
Usage
Register as a student or teacher

Teachers can set their availability and manage appointments

Students can book appointments with teachers and view details

Pay for appointments using Razorpay test payments

View appointment history and statuses

Notes
This project is under active development

The payment gateway is currently in test mode. For production, update your Razorpay keys accordingly

Ensure MongoDB is running and your connection string is correct

