import { createSlice } from "@reduxjs/toolkit";

const fetchItems = createSlice({
  name: "apiData",
  initialState: [],
  reducers: {
    addFetch: (state, action) => {
      return action.payload
    },
  },
});

export default fetchItems.reducer;
export const { addFetch } = fetchItems.actions;
