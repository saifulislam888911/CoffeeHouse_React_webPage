// Redux Slice for Theme Management (Light/Dark Mode)
// A "slice" is a collection of Redux reducer logic and actions for a single feature

import { createSlice } from '@reduxjs/toolkit'

// Get saved theme from localStorage, or default to 'light'
// localStorage is a browser storage that persists data even after page refresh
const getInitialTheme = () => {
  const savedTheme = localStorage.getItem('theme')
  return savedTheme ? savedTheme : 'light'
}

// Create the theme slice
// This manages the theme state (light or dark mode)
const themeSlice = createSlice({
  name: 'theme', // Name of the slice
  initialState: {
    mode: getInitialTheme(), // Current theme mode: 'light' or 'dark'
  },
  reducers: {
    // Action to toggle between light and dark mode
    toggleTheme: (state) => {
      // If current theme is 'light', change to 'dark', otherwise change to 'light'
      state.mode = state.mode === 'light' ? 'dark' : 'light'
      // Save the new theme to localStorage so it persists after page refresh
      localStorage.setItem('theme', state.mode)
    },
  },
})

// Export the action so we can use it in components
export const { toggleTheme } = themeSlice.actions

// Export the reducer so we can add it to the store
export default themeSlice.reducer

