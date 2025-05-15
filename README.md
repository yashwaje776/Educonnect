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
| React, Tailwind | Node.js, Express | MongoDB   | Razorpay (Test Mode)  |

---
Installing
Installing - easy ::
Download the repository
git clone https://github.com/margiki/NHS-nodejs-webapp
Open the Terminal (Linux & MacOS) or PowerShell (Windows) and change directory to the project folder.
Go to frontend folder and type " npm install " in the terminal and press Enter.All the dependencies of frontend would be installed.
cd frontend 
npm install 
Go to backed folder and type " npm install " in the terminal and press Enter.All the dependencies of backed would be installed.
cd backend  
npm install 
Go back to the Terminal (PowerShell) and be sure that you are pointing inside the project folder. To open the application, type ‘npm run dev ’ and press Enter.

The application should be live on the local port 3000.

Type http://localhost:3000/ into a browser.

Now you should be inside the application


Usage
Register as a student or teacher

Teachers can set their availability and manage appointments

Students can book appointments with teachers and view details

Pay for appointments using Razorpay test payments

View appointment history and statuses

