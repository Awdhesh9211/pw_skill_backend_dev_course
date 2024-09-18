import { User } from "../model/user.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken";
export const auth=asyncHandler(async(req,res,next)=>{
    const token=req.cookies["pw_token"];
    if(!token && req.url=="/signup"){
    return next();
    }
    if(!token) return next(new Error("Your session is expire..."));
    const data=jwt.verify(token,"b6t4gf7y3g893y637r4438r4r47rg748r4");
    const user= await User.findOne({_id:data._id});
    if(!user) return next(new Error("Invalid Token..."));
    req.user=user;
    if(user && req.url=="/signup") return next("You are Logged in First Logout...");
    next();  
})