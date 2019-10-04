import { Router } from 'express';

// import controller
import recipeController from '../controllers/controller'

const recipeRoute = Router();

recipeRoute.get('/recipes', recipeController.getAllRecipe);
recipeRoute.get('/recipes/:id', recipeController.getSingleRecipe);
recipeRoute.post('/recipes', recipeController.postARecipe);
recipeRoute.put('/recipes/:id', recipeController.modifyARecipe);
recipeRoute.delete('/recipes/:id', recipeController.deleteARecipe);


export default recipeRoute;