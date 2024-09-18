import express from "express";
import { auth } from "../middelware/auth.js";
import { createCart, deleteCart, fetchCart, updateCart } from "../controller/cart.controller.js";

const app=express.Router();
app.get("/fetch",auth,fetchCart);
app.post("/create/:_id",auth,createCart);
app.put("/edit/:_id",auth,updateCart);
app.delete("/delete/:_id",auth,deleteCart);

export default app;