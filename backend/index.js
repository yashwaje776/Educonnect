import express from "express"
import cors from "cors"
import "dotenv/config";
import connectDB from "./config/Db.js";
import connectCloudinary from "./config/Cloudinary.js";
import adminRouter from "./Routes/AdimnRoute.js";
import userRouter from "./Routes/UserRoute.js";
import TeacherRouter from "./Routes/TeacherRoute.js";
import Razorpay from "razorpay";
import crypto from "crypto";
import appointmentModel from "./models/appointModel.js"



// create app instance
const app=express();
const port=process.env.PORT 
 
app.use(express.json())
app.use(cors()) 
connectDB()
connectCloudinary()

app.use("/api/admin",adminRouter) 
app.use("/api/user",userRouter)
app.use('/api/teacher',TeacherRouter)

app.get("/",(req,res)=>{
    res.send("hello word 1")
}) 


const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET
});


app.post("/create-payment", async (req, res) => {
    try {
        const { appointmentId } = req.body;
        const appointmentData = await appointmentModel.findById(appointmentId);
        const amount =appointmentData.amount;
        const options = {
            amount: amount * 100, 
            currency: "INR",
            receipt: `receipt_${Date.now()}`,
            payment_capture: 1 
        };

      
        const order = await razorpay.orders.create(options);
        res.json({ success: true, order });
    } catch (error) {
       
        res.status(500).json({ success: false, message: "Server error" });
    }
});


app.post("/verify-payment", async (req, res) => {
    try {
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature, appointmentId } = req.body;

        const hmac = crypto.createHmac("sha256", process.env.RAZORPAY_KEY_SECRET);
        hmac.update(`${razorpay_order_id}|${razorpay_payment_id}`);
        const generated_signature = hmac.digest("hex");

        if (generated_signature === razorpay_signature) {
            
            await appointmentModel.findByIdAndUpdate(appointmentId, { payment: true });

            res.json({ success: true, message: "Payment verified" });
        } else {
            res.status(400).json({ success: false, message: "Payment verification failed" });
        }
    } catch (error) {
       
        res.status(500).json({ success: false, message: "Server error" });
    }
});
  


app.listen(port,()=>
    {console.log(`Server is running on http://localhost:${port}`);}
)

