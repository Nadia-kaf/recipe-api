import { RecipeModel } from "../models/recipe.js";

export const addRecipe = async (req, res, next) => {
  try {
    //add recipe to the database
    const createResult = await RecipeModel.create({
      ...req.body,
      image: req.file.filename
    });
    //return response
    res.status(201).json(createResult);
  } catch (error) {
    //forward to express error handler
    next(error);
  }
};

export const getRecipes = async (req, res, next) => {
  try {
    //Get all recipes from database

    const result = await RecipeModel.find({});

    //return response
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

export const getRecipe = async (req, res) => {
  const getSingle = await RecipeModel.findById(req.params.id);
  //return 404 if recipe not found
  if (getSingle === null) {
    return res.status(404).json({
      message: `Recipe with objectId: ${req.params.id} Not found!`,
    });
  }
  
  res.json(getSingle);
};

export const updateRecipe = (req, res) => {
  res.send("patch recipe");
};

export const deleteRecipe = (req, res) => {
  res.send("delect recipe by id");
};
