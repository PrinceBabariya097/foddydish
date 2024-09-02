import { configureStore } from "@reduxjs/toolkit";
import SearchSlice from "./features/SearchSlice";

export const store = configureStore({
    reducer: {
        search: SearchSlice
    }
})

