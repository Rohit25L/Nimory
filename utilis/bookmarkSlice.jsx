import { createSlice } from "@reduxjs/toolkit";

const BookmarkSlice = createSlice({
  name: "bookmark",
  initialState: {
    items: [],
  },
  reducers: {
    additems: (state, action) => {
      state.items.push(action.payload);
    },
    removeitems: (state, action) => {
      console.log("removed" + state.items);
      state.items = state.items.filter((item) => item.mal_id != action.payload);
    },

    clearitems: (state) => {
      state.items.length = 0;
    },
  },
});

export const { additems, removeitems, clearitems } = BookmarkSlice.actions;

export default BookmarkSlice.reducer;
