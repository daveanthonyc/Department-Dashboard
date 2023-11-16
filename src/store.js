import { configureStore } from "@reduxjs/toolkit";
import menu from "./state/global";

export const store = configureStore({
    reducer: menu.reducer 
})

export default store;   