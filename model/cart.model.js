import mongoose from "mongoose";

/**
 * product
 * quantity
 * user
 * total
 */

const cartSchema=new mongoose.Schema({
    product:
        {
        type:mongoose.Types.ObjectId,
        ref:"Product",
        unique:true
        }
    ,
    quantity:{
        type:Number,
        required:true,
    },
    user:{
        type:mongoose.Types.ObjectId,
        ref:"User"
    }
    ,
    total:{
        type:Number,
    }
},{timestamp:true});

export const Cart=mongoose.model("Cart",cartSchema);
