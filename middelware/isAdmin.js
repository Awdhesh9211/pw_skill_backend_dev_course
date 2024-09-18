export const isAdmin=(req,res,next)=>{
    const {userType}=req.user;
    if(userType == "CUSTOMER") return res.status(400).json({message:"you cannot access the resources .."});
    next();
}