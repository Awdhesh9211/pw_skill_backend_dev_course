import { User } from "../model/user.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
// import { JWT_SECRET } from "../config/server.config.js";

export const signup=asyncHandler(async(req,res,next)=>{
    // 1. gather data 
    // 2.processs data 
    // 3.response 
    const {  name, userId, email, userType,  password}=req.body;
    console.log(req.body);
    

    const exist=await User.findOne({userId});

    if(exist) return next(new Error(`User with ${userId} Already Exists...`));
     
    await User.create({
        name,
        userId,
        userType,
        email,
        password:bcrypt.hashSync(password,10)
    })

    res.status(201).json({message:"registration successfull..."});
})

export const login=asyncHandler(async(req,res,next)=>{
    const {userId, password}=req.body;

    const user=await User.findOne({userId}).select("+password");

    if(!user) return next(new Error("Invalid Credential..."));  

    const match= bcrypt.compareSync(password,user.password);

    if(!match) return next(new Error("Invalid Credential..."));

    const token=jwt.sign({_id:user._id},"b6t4gf7y3g893y637r4438r4r47rg748r4",{expiresIn:24*60*60*1000});
    
    res.status(200).cookie("pw_token",token,{maxAge:24*60*60*1000,httpOnly:true}).json({message:"login success successfull...",user,accessToken:token});
})

export const logout=asyncHandler(async(req,res,next)=>{
    res.status(200).cookie("pw_token","").json({message:"Logged Out Successfully..."});
})
