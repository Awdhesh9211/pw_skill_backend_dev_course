import { asyncHandler } from "../utils/asyncHandler.js";
import { Category } from "../model/category.model.js";


// CREATE
export const createCategory=asyncHandler(async(req,res,next)=>{
    const {name,description}=req.body;
    const present=await Category.findOne({name});
    if(present) return res.status(403).json("Category Already exists...");
    const category=await Category.create({
        name,
        description
    })
    res.status(201).json({msg:"Category Created SuccessFully....",category});

})
// FETCH 
export const fetchCategory=asyncHandler(async(req,res,next)=>{
    const category=await Category.find();
    res.status(201).json({category});
})
// EDIT 
export const editCategory=asyncHandler(async(req,res,next)=>{
    const {_id}=req.params;
    const {name,description}=req.body;
    const category=await Category.findByIdAndUpdate({_id},{name,description});
    res.status(201).json({category});
})
// DELETE
export const deleteCategory=asyncHandler(async(req,res,next)=>{
    const {_id}=req.params;
    const category=await Category.findByIdAndDelete({_id});
    res.status(201).json({msg:"Deleted ...",category});
})
