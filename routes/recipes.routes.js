import { Router } from "express";
import { addRecipe, deleteRecipe, getRecipe, getRecipes, updateRecipe } from "../controllers/recipes.controller.js";
import multer from "multer";
import { MulterSaveFilesOrgStorage } from "multer-savefilesorg-storage";
import dotenv from "dotenv";



//load env variables
dotenv.config()

//configure upload middleware
// const upload = multer({dest: 'uploads/images'});
const upload = multer({
    storage:MulterSaveFilesOrgStorage({
        serverPath: `https://savefiles.org/api/v1/uploads`,
        apiAccessToken: process.env.SAVEFILESORG_API_KEY,
        relativePath: '/recipes/images/*'
    }),
    preservePath: true
});

//Create Recipes router
const router = Router();

router.post('/', upload.single('image'),addRecipe);


router.get('/',getRecipes);


router.get('/:id',getRecipe );

router.patch('/:id',updateRecipe);

router.delete('/recipes/:id',deleteRecipe);


export default router;