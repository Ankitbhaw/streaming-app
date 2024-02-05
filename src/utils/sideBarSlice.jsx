/* eslint-disable no-unused-vars */
import { createSlice } from '@reduxjs/toolkit'

const sideBarSlice = createSlice({
    name:'sideBar',
    initialState: true,
    reducers: {
        toggleSideBar: (state) =>!state,
        toggleOff: (state) =>false,
        toggleOn: (state) =>true
    }
    
})
// eslint-disable-next-line no-unused-vars
export const {toggleSideBar,toggleOff,toggleOn} = sideBarSlice.actions;
export default sideBarSlice.reducer;