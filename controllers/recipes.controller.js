import { RecipeModel } from "../models/recipe.js";


export const addRecipe =  async (req, res) =>{
    res.send("post recipes");
    //add recipe to the database 
    const createResult = await RecipeModel.create(req.body);
    //return response
    res.json(createResult);
} 


export const  getRecipes  = (req, res) =>{
    res.send("get all recipes");
} 

export const getRecipe =  (req, res) =>{
    res.send("get by id");
}

export const updateRecipe =  (req, res) =>{
    res.send("patch recipe");
} 

export const deleteRecipe = (req, res) =>{
    res.send("delect recipe by id");
} 