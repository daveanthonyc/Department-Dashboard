import { createSlice } from "@reduxjs/toolkit";

export const menu = createSlice({
    name: 'menu',
    initialState: {
        isOpen: false
    },
    reducers: {
        openMenu: state => {
            state.isOpen = true
        },
        closeMenu: state => {
            state.isOpen = false
        },
    }
})

export const {openMenu, closeMenu} = menu.actions;
export default menu;