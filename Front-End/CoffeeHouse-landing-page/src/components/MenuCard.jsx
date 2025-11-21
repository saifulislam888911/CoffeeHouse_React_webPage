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
    <div className="group bg-white/90 dark:bg-gray-900 rounded-3xl shadow-2xl overflow-hidden border border-amber-50/50 dark:border-gray-800 hover:border-amber-200 dark:hover:border-amber-500/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-amber-200/40">
      <div className="relative h-56 bg-gradient-to-br from-amber-100 to-amber-300 dark:from-amber-900/40 dark:to-amber-700/40 flex items-center justify-center overflow-hidden">
        {item.image ? (
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            loading="lazy"
          />
        ) : (
          <span className="text-6xl">☕</span>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold bg-white/80 text-gray-800 dark:bg-gray-900/80 dark:text-amber-200">
          Signature Brew
        </div>
      </div>

      <div className="p-6 space-y-4">
        <div className="flex items-center gap-3">
          <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200">
            {item.category}
          </span>
          <span className="text-sm text-gray-400 dark:text-gray-500">
            {item.origin || 'Single Origin'}
          </span>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            {item.name}
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {item.notes || 'Caramel, cocoa, spice'}
          </p>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-amber-600 dark:text-amber-400">
            {item.price}
          </span>
          <button
            onClick={handleFavoriteClick}
            className={`p-3 rounded-full shadow-inner backdrop-blur transition-all duration-300 ${
              isFavorite
                ? 'bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400 scale-110'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-400 dark:text-gray-500 hover:bg-red-100 dark:hover:bg-red-900'
            }`}
            aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
          >
            {isFavorite ? '🩵' : '🤍'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default MenuCard

