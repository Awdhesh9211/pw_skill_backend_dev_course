import mongoose from "mongoose";

/**
 * name
 * userId
 * password
 * email
 * userType
 */

const categorySchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true,
    },
},{timestamp:true,versionKey:false});

export const Category=mongoose.model("Category",categorySchema);
