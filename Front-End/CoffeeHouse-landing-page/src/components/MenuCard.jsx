// MenuCard Component
// Displays a single coffee item with image, name, price, and favorite button

import { useSelector, useDispatch } from 'react-redux'
import { addFavorite, removeFavorite } from '../redux/favoritesSlice'

function MenuCard({ item }) {
  // Get favorites from Redux store
  const favorites = useSelector((state) => state.favorites.items)
  
  // Check if this item is in favorites
  const isFavorite = favorites.includes(item.id)
  
  // Get dispatch function to trigger Redux actions
  const dispatch = useDispatch()

  // Handle favorite button click
  const handleFavoriteClick = () => {
    if (isFavorite) {
      // If already favorite, remove it
      dispatch(removeFavorite(item.id))
    } else {
      // If not favorite, add it
      dispatch(addFavorite(item.id))
    }
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow transform hover:scale-105">
      {/* Coffee Image */}
      <div className="h-48 bg-gradient-to-br from-amber-200 to-amber-400 dark:from-amber-800 dark:to-amber-900 flex items-center justify-center">
        {/* Placeholder image - in a real app, you'd use actual images */}
        <span className="text-6xl">☕</span>
      </div>
      
      {/* Card Content */}
      <div className="p-6">
        {/* Category Badge */}
        <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200 mb-2">
          {item.category}
        </span>
        
        {/* Coffee Name */}
        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">
          {item.name}
        </h3>
        
        {/* Price and Favorite Button */}
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-amber-600 dark:text-amber-400">
            {item.price}
          </span>
          
          {/* Favorite Button (Heart Icon) */}
          <button
            onClick={handleFavoriteClick}
            className={`p-2 rounded-full transition-all ${
              isFavorite
                ? 'bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-400 dark:text-gray-500 hover:bg-red-100 dark:hover:bg-red-900'
            }`}
            aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
          >
            {isFavorite ? '❤️' : '🤍'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default MenuCard

