import { createSlice } from "@reduxjs/toolkit";

export const allRecipesSlice = createSlice({
  name: 'allRecipes',
  initialState: {
    recipes: [{
      id: 0,
    name: '',
    sections: [{ components: [] }],
    thumbnail_url: '',
    cook_time_minutes: 0,
    instructions: []
    }],


  },
  reducers: {
    updateAllRecipes: (state, action) => {
      const newRecipes = action.payload.recipes;
      if (Array.isArray(newRecipes)) {
        state.recipes = newRecipes;
      } else {
        console.error("Invalid payload: 'recipes' is not an array");
      }
    },
    resetAllRecipes: (state) => {
      // Reimposta lo stato delle ricette al suo valore iniziale
      state.recipes = [{
        id: 0,
        name: '',
        sections: [{ components: [] }],
        thumbnail_url: '',
        cook_time_minutes: 0,
        instructions: []
      }];
    },
  },
});



export const { updateAllRecipes, resetAllRecipes} =
allRecipesSlice.actions;

export default allRecipesSlice.reducer;