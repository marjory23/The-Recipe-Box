import { createSlice } from "@reduxjs/toolkit";

export const currentRecipeSlice = createSlice({
  name: 'currentRecipe',
  initialState: {
    id: 0,
    name: '',
    sections: [{ components: [] }],
    thumbnail_url: '',
    cook_time_minutes: 0,
    instructions: []

  },
  reducers: {
    updateCurrentRecipe: (state, action) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.thumbnail_url = action.payload.thumbnail_url;
      state.cook_time_minutes = action.payload.cook_time_minutes;
      state.instructions = [...action.payload.instructions];
      state.sections = [...action.payload.sections];
    }
  },
});



export const { updateCurrentRecipe, } =
currentRecipeSlice.actions;

export default currentRecipeSlice.reducer;