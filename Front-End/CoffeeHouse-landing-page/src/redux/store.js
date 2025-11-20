// Redux Store Configuration
// The store is the central place where all your app's state lives

import { configureStore } from '@reduxjs/toolkit'
import themeReducer from './themeSlice'
import favoritesReducer from './favoritesSlice'

// Create and configure the Redux store
// The store combines all your reducers (theme and favorites)
export const store = configureStore({
  reducer: {
    // theme: manages light/dark mode
    theme: themeReducer,
    // favorites: manages favorite menu items
    favorites: favoritesReducer,
  },
})

// Export types for TypeScript (if you were using TypeScript)
// For JavaScript, we don't need this, but it's good practice

