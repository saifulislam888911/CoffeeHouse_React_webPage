import { useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addFavorite, removeFavorite } from '../redux/favoritesSlice'

const HeartIcon = ({ filled }) => (
  <svg
    viewBox="0 0 24 24"
    className={`h-5 w-5 transition-colors ${filled ? 'text-rose-500' : 'text-slate-400 dark:text-slate-500'}`}
    fill={filled ? 'currentColor' : 'none'}
    stroke="currentColor"
    strokeWidth="1.6"
  >
    <path d="M12 21s-6.3-4.9-8.4-9C1.7 8.4 2.8 5 6 5c1.7 0 3.1.9 4.1 2.3C11.9 5.9 13.3 5 15 5c3.2 0 4.3 3.4 2.3 7-1.1 4.1-5.4 9-5.4 9z" />
  </svg>
)

function MenuCard({ item }) {
  const favorites = useSelector((state) => state.favorites.items)
  const favoritesSet = useMemo(() => new Set(favorites), [favorites])
  const isFavorite = favoritesSet.has(item.id)
  const dispatch = useDispatch()

  const handleFavoriteClick = () => {
    if (isFavorite) {
      dispatch(removeFavorite(item.id))
      return
    }
    dispatch(addFavorite(item.id))
  }

  return (
    <article className="group bg-white/90 dark:bg-gray-900 rounded-3xl shadow-2xl overflow-hidden border border-amber-50/50 dark:border-gray-800 hover:border-amber-200 dark:hover:border-amber-500/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-amber-200/40 focus-within:-translate-y-2">
      <div className="relative h-56 bg-gradient-to-br from-amber-100 to-amber-300 dark:from-amber-900/40 dark:to-amber-700/40 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <p className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold bg-white/80 text-gray-800 dark:bg-gray-900/80 dark:text-amber-200">
          Signature Brew
        </p>
      </div>

      <div className="p-6 space-y-4">
        <div className="flex items-center gap-3">
          <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200">
            {item.category}
          </span>
          <span className="text-sm text-gray-400 dark:text-gray-500">{item.origin}</span>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">{item.name}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">{item.notes}</p>
        </div>

        <div className="flex items-center justify-between gap-3">
          <p className="text-3xl font-bold text-amber-600 dark:text-amber-400">{item.price}</p>
          <button
            type="button"
            onClick={handleFavoriteClick}
            aria-pressed={isFavorite}
            aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
            className={`p-3 rounded-full shadow-inner backdrop-blur transition-all duration-300 ${
              isFavorite
                ? 'bg-rose-100 dark:bg-rose-900/40 text-rose-600 dark:text-rose-300 scale-110'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-400 dark:text-gray-500 hover:bg-rose-100 dark:hover:bg-rose-900/40'
            }`}
          >
            <HeartIcon filled={isFavorite} />
          </button>
        </div>
      </div>
    </article>
  )
}

export default MenuCard
