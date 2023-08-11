import { configureStore } from "@reduxjs/toolkit";
import currentMyRecipeReducer from './currentMyRecipeSlice';
import currentRecipeReducer from './currentRecipeSlice';
import allMyRecipesReducer from "./allMyRecipesSlice";
import allRecipesReducer from "./allRecipesSlice";
import userReducer from './userSlice';
import currentSearchReducer from "./searchSlice";


const store = configureStore({
  reducer: {
    currentMyRecipe: currentMyRecipeReducer,
    currentRecipe: currentRecipeReducer,
    allMyRecipes: allMyRecipesReducer,
    allRecipes: allRecipesReducer,
    currentUser: userReducer,
    currentSearch: currentSearchReducer

  },
});

export default store;