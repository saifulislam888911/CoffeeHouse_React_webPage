import { createSlice } from '@reduxjs/toolkit'

const getInitialFavorites = () => {
  if (typeof window === 'undefined') return []
  try {
    const stored = window.localStorage.getItem('favorites')
    return stored ? JSON.parse(stored) : []
  } catch (error) {
    console.warn('Unable to read favorites from storage', error)
    return []
  }
}

const persistFavorites = (items) => {
  if (typeof window === 'undefined') return
  window.localStorage.setItem('favorites', JSON.stringify(items))
}

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    items: getInitialFavorites(),
  },
  reducers: {
    addFavorite: (state, action) => {
      if (state.items.includes(action.payload)) return
      state.items.push(action.payload)
      persistFavorites(state.items)
    },
    removeFavorite: (state, action) => {
      state.items = state.items.filter((id) => id !== action.payload)
      persistFavorites(state.items)
    },
  },
})

export const { addFavorite, removeFavorite } = favoritesSlice.actions
export default favoritesSlice.reducer
