import { createSlice } from "@reduxjs/toolkit";

export const currentMyRecipeSlice = createSlice({
  name: 'currentMyRecipe',
  initialState: {
    id: 0,
    title: '',
    ingredients: [{
      food: '',
      quantity: 0,
      measure: '',
      }],
    image: '',
    duration: 0,
    preparation: ''

  },
  reducers: {
    updateCurrentRecipe: (state, action) => {
      state.id = action.payload.id;
      state.title = action.payload.title;
      state.image = action.payload.image;
      state.duration = action.payload.duration;
      state.preparation = action.payload.preparation;
      state.ingredients = [...action.payload.ingredients];
    }
  },
});



export const { updateCurrentMyRecipe, } =
currentMyRecipeSlice.actions;

export default currentMyRecipeSlice.reducer;