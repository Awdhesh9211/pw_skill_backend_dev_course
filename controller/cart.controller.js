

/**
 * product
 * quantity
 * user
 * total
 */

import { Cart } from "../model/cart.model.js";
import { Product } from "../model/product.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";

// CREATE
export const createCart=asyncHandler(async(req,res,next)=>{
    const {_id}=req.params;
    const {quantity}=req.body;
    const prod=await Product.findOne({_id});
    if(quantity<=0) return next(new Error(`Invalid quantity`));
    if(quantity > prod.stock) return  next(new Error(`In stock there is only ...${prod.stock}`));
   
    await Cart.create({
            product:_id,
            quantity,
            user:req.user._id,
            total:quantity*prod.price
        });
        
    res.status(201).json({msg:"Product is added To Your cart.."});
})
// FETCH
export const fetchCart=asyncHandler(async(req,res,next)=>{
    const cart=await Cart.find({user:req.user._id}).populate("product").populate("user");

    if(cart==null) return next(new Error("Cart is Empty..."));

    let grandTotal=0;
    for(let item of cart){ 
        grandTotal+=item.total;
    }
    res.status(200).json({...cart,grandTotal});
})
// UPDATE
export const updateCart=asyncHandler(async(req,res,next)=>{
    const {_id}=req.params;
    const {quantity}=req.body;
    const cart=await Cart.findOne({_id}).populate("product");
    console.log(cart);
    
    if(quantity<=0) return next(new Error(`Invalid quantity`));
    if(quantity > cart.product.stock) return  next(new Error("Out of Stock..."));
    await Cart.findByIdAndUpdate({_id},{
        product:cart.product._id,
        quantity,
        user:req.user._id,
        total:quantity*cart.product.price
    })
    res.status(201).json({msg:"Product is updated.."});
})
// DELETE
export const deleteCart=asyncHandler(async(req,res,next)=>{
    const {_id}=req.params;
    await Cart.findByIdAndDelete({_id});
    res.status(201).json({msg:"Cart Item  is deleted.."});
})