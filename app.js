import express from "express";
import dotenv from "dotenv";
import recipesRoutes from "./routes/recipes.routes.js";
import mongoose from "mongoose";
import cors from "cors";

//load env variables
dotenv.config()

const app =express();
const PORT = process.env.PORT ||7070

//apply middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());

app.use(express.static('uploads'));


//app.use(recipesRoutes); 
 app.use('/recipes',recipesRoutes);

//make databse connection 
await mongoose.connect(process.env.MONGO_URI);

app.listen(PORT, ()=>{
    console.log(`recipe app is running ${PORT}`)
})