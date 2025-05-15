import jwt from "jsonwebtoken"

const authadmin=async(req,res,next)=>{
    try{
        const {atoken}=req.headers;
        if(!atoken){
            return res.json({success:false,message:"AnAuthorized login Again"});
        }
        const token_decode=jwt.verify(atoken,process.env.JWT_SECRET);
        
        if(token_decode===process.env.ADMIN_EMAIL+process.env.ADMIN_PASSWORD){
            next()
        }
        else{
           return res.json({success:false,message:"AnAuthorized login Again"})
        }
    }
    catch(error){
      
        res.json({success:false,message:error.message})
    }
}

export default authadmin