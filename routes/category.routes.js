import express from "express";
import { auth } from "../middelware/auth.js";
import { createCategory, deleteCategory, editCategory, fetchCategory } from "../controller/category.controller.js";
import { isAdmin } from "../middelware/isAdmin.js";

const app=express.Router();
app.get("/fetch",fetchCategory);
app.post("/create",auth,isAdmin,createCategory);
app.put("/edit/:_id",auth,isAdmin,editCategory);
app.delete("/delete/:_id",auth,isAdmin,deleteCategory);

export default app;