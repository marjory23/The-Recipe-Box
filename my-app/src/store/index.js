import { configureStore } from "@reduxjs/toolkit";
import currentMyRecipeReducer from './currentMyRecipeSlice';
import currentRecipeReducer from './currentRecipeSlice'
import allMyRecipesReducer from "./allMyRecipesSlice";
import allRecipesReducer from "./allRecipesSlice"
import userReducer from './userSlice'


const store = configureStore({
  reducer: {
    currentMyRecipe: currentMyRecipeReducer,
    currentRecipe: currentRecipeReducer,
    allMyRecipes: allMyRecipesReducer,
    allRecipes: allRecipesReducer,
    currentUser: userReducer

  },
});

export default store;