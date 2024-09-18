import express from "express";
import { auth } from "../middelware/auth.js";
import { isAdmin } from "../middelware/isAdmin.js";
import { createProduct, deleteProduct, fetchProduct, updateProduct } from "../controller/product.controller.js";

const app=express.Router();
app.get("/fetch",fetchProduct);
app.post("/create",auth,isAdmin,createProduct);
app.put("/edit/:_id",auth,isAdmin,updateProduct);
app.delete("/delete/:_id",auth,isAdmin,deleteProduct);

export default app;