import { configureStore } from "@reduxjs/toolkit";
import currentMyRecipeReducer from './currentMyRecipeSlice'
import allMyRecipesReducer from "./allMyRecipesSlice"
import userReducer from './userSlice'


const store = configureStore({
  reducer: {
    currentMyReciper: currentMyRecipeReducer,
    allMyRecipes: allMyRecipesReducer,
    currentUser: userReducer

  },
});

export default store;