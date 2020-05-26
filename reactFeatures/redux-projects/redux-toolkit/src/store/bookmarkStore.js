
import {configureStore} from "@reduxjs/toolkit";
import bookmarkRootReducer from "../features/bookmark";


export const bookmarkStore = configureStore({
    reducer: bookmarkRootReducer
})
