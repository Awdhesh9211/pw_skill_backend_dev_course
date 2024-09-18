import express from "express";
import { signup ,login,logout} from "../controller/user.controller.js";
import { auth } from "../middelware/auth.js";

const app=express.Router();

app.post("/signup",signup);
//http://localhost:8080/ecom/api/v1/auth/signup {  name, userId, email, userType,  password}
app.post("/login",login);
app.post("/logout",logout);
export default app;