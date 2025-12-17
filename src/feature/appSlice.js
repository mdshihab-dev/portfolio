import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  showSidebar: false,
  theme: localStorage.getItem('theme') || 'light',
}

export const appSlice = createSlice({
  name: 'appSlide',
  initialState,
  reducers: {
    toggleSidebar: (state,action) => {
      state.showSidebar = action.payload
    },
    switchTheme: (state,action) => {
      state.theme = action.payload
      localStorage.setItem('theme', action.payload)
    },
  },
})

export const {toggleSidebar,switchTheme } = appSlice.actions

export default appSlice.reducer