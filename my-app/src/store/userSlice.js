import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    id: 0,
    email: '',
    firstName: '',
    lastName: '',
    recipes: []

  },
  reducers: {
    updateUser: (state, action) => {
      state.id = action.payload.id;
      state.email = action.payload.title;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.recipes = action.payload.recipes;
    },
    addMyRecipe: (state, action) => {
      state.recipes.push(action.payload)
    },
    updateMyRecipes: (state, action) => {
      state.recipes = action.payload
    }
  },
});



export const { updateUser, addMyRecipe, updateMyRecipes} = userSlice.actions;

export default userSlice.reducer;