import { createSlice } from "@reduxjs/toolkit";

export const currentSearchSlice = createSlice({
  name: 'currentSearch',
  initialState: {
    title: ''

  },
  reducers: {
    updateCurrentSearch: (state, action) => {
      state.title = action.payload.title;
    },
    resetCurrentSearch: (state, action) => {
      state.title = '';
    }
  },
});



export const { updateCurrentSearch, resetCurrentSearch} = currentSearchSlice.actions;

export default currentSearchSlice.reducer;