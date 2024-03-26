import { Router } from "express";
import { addRecipe, deleteRecipe, getRecipe, getRecipes, updateRecipe } from "../controllers/recipes.controller.js";
import multer from "multer";

//configure upload middleware
const upload = multer({dest: 'uploads'});


//Create Recipes router
const router =Router();

router.post('/', upload.single('image'),addRecipe);


router.get('/',getRecipes);


router.get('/:id',getRecipe );

router.patch('/:id',updateRecipe);

router.delete('/recipes/:id',deleteRecipe);


export default router;