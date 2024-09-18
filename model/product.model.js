import mongoose from "mongoose";

/**
 * name
 * description
 * price
 * quantity
 * category
 */

const productSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    description:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true
    },
    stock:{
       type:Number,
       required:true
    },
    category:{
        type:mongoose.Types.ObjectId,
        ref:"Category"
    }
},{timestamp:true});

export const Product=mongoose.model("Product",productSchema);
