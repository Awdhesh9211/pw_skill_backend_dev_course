import { Product } from "../model/product.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";


/**
 * name
 * description
 * price
 * quantity
 * category
 */

// CREATE
export const createProduct=asyncHandler(async(req,res,next)=>{
    const {name,description,price,stock,category}=req.body;
    const product = await Product.create({name,description,price,stock,category});
    res.status(201).json({msg:"Product is created..",product});
})
// FETCH
export const fetchProduct=asyncHandler(async(req,res,next)=>{
    const product=await Product.find().populate("category");
    res.status(200).json({product});
})
// UPDATE
export const updateProduct=asyncHandler(async(req,res,next)=>{
    const {_id}=req.params;
    const {name,description,price,stock,category}=req.body;
    const product = await Product.findByIdAndUpdate({_id},{name,description,price,stock,category});
    res.status(201).json({msg:"Product is updated..",product});
})
// DELETE
export const deleteProduct=asyncHandler(async(req,res,next)=>{
    const {_id}=req.params;
    const product = await Product.findByIdAndDelete({_id});
    res.status(201).json({msg:"Product is deleted..",product});
})