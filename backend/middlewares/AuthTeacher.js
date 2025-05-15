import jwt from "jsonwebtoken"

const authTeacher=async(req,res,next)=>{
    try{
        const {ttoken}=req.headers;
        if(!ttoken){
            return res.json({success:false,message:"unauthorized teacher"});
        }
        const decode_token= jwt.verify(ttoken,process.env.JWT_SECRET);
        req.body.techId=decode_token.id;
        next()
    }
    catch(error){
        res.json({success:false,message:error.message})
    }

}

export default authTeacher;