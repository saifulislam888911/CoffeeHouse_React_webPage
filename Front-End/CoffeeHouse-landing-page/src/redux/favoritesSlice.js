// Redux Slice for Favorites Management
// This manages which menu items the user has added to favorites

import { createSlice } from '@reduxjs/toolkit'

// Get saved favorites from localStorage, or default to empty array
const getInitialFavorites = () => {
  const savedFavorites = localStorage.getItem('favorites')
  return savedFavorites ? JSON.parse(savedFavorites) : []
}

// Create the favorites slice
const favoritesSlice = createSlice({
  name: 'favorites', // Name of the slice
  initialState: {
    items: getInitialFavorites(), // Array of favorite item IDs
  },
  reducers: {
    // Action to add an item to favorites
    addFavorite: (state, action) => {
      // action.payload contains the item ID we want to add
      const itemId = action.payload
      // Only add if it's not already in favorites
      if (!state.items.includes(itemId)) {
        state.items.push(itemId)
        // Save to localStorage
        localStorage.setItem('favorites', JSON.stringify(state.items))
      }
    },
    // Action to remove an item from favorites
    removeFavorite: (state, action) => {
      // action.payload contains the item ID we want to remove
      const itemId = action.payload
      // Filter out the item with this ID
      state.items = state.items.filter(id => id !== itemId)
      // Save to localStorage
      localStorage.setItem('favorites', JSON.stringify(state.items))
    },
  },
})

// Export the actions so we can use them in components
export const { addFavorite, removeFavorite } = favoritesSlice.actions

// Export the reducer so we can add it to the store
export default favoritesSlice.reducer

