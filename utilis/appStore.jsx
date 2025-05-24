import { configureStore } from "@reduxjs/toolkit";
import BookmarkSlice from "./bookmarkSlice"
import fetchData from "./fetchData"

const appStore =configureStore({
    reducer:{
        bookmark:BookmarkSlice,
        apiData :fetchData,
    },
})

export default appStore