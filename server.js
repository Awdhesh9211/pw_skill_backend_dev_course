import express from "express";   //server
import mongoose from "mongoose"; //mongodb connection,query,schema
import cookieParser from "cookie-parser";//for parsing cookie parser


import  {DB_URL, PORT} from "./config/server.config.js";

// import { User } from "./model/user.model.js";
// import bcrypt from "bcrypt";



// ROUTES
import userRouter from "./routes/user.routes.js";
import categoryRouter from "./routes/category.routes.js";
import cartRouter from "./routes/cart.routes.js";
import productRouter from "./routes/product.routes.js";



const app=express();

/**
 * connection with mongodb
 */
mongoose.connect(DB_URL);
const db=mongoose.connection;
db.on("error",()=>{
    console.log("Error while connecting mongodb..."); 
}).once("open",()=>{
    console.log("Connected to mongodb....");
    // init();
})

app.use(express.json());
app.use(cookieParser());


app.use("/ecom/api/v1/auth",userRouter);
app.use("/ecom/api/v1/categories",categoryRouter);
app.use("/ecom/api/v1/products",productRouter);
app.use("/ecom/api/v1/carts",cartRouter);




app.listen(PORT,()=>{
    console.log("Server is Running on :",PORT);
})






// const init=async()=>{
//     try {
//         let user=await User.findOne({userId:"admin"});
//         if(user){
//            console.log("Admin already exists..");
//            console.log("Admin: ",user);
//           return;
//         }
   
//         user=await User.create({
//             name:"Awdhesh",
//             userId:"admin",
//             email:"gaundawdhesh9211@gmail.com",
//             userType:"ADMIN",
//             password:bcrypt.hashSync("welcome1",10)
//         })
//         console.log("Admin: ",user);
//     } catch (error) {
//         console.log("Admin: ",error);
//     }
// }