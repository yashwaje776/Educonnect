import mongoose from "mongoose"

const appointmentschma=new mongoose.Schema({
    userId:{type:String,require:true},
    techId:{type:String,require:true},
    slotdate:{type:String,require:true},
    slotTime:{type:String,require:true},
    userdata:{type:Object,require:true},
    techdata:{type:Object,require:true},
    amount:{type:Number,require:true},
    date:{type:Number,require:true},
    cancelled:{type:Boolean,default:false},
    payment:{type:Boolean,default:false},
    iscompleted:{type:Boolean,default:false},
})

const appointmentModel=mongoose.models.appointment || mongoose.model('appointment',appointmentschma)

export default appointmentModel