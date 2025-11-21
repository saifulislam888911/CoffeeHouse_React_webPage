import { useMemo, useState } from "react";
import MenuCard from './MenuCard'
import menuItems from "../data/menuItems";

function MenuSection() {
  const [activeCategory, setActiveCategory] = useState('All')

  const categories = useMemo(
    () => ['All', ...new Set(menuItems.map((item) => item.category))],
    []
  )

  const filteredItems = useMemo(
    () =>
      activeCategory === 'All'
        ? menuItems
        : menuItems.filter((item) => item.category === activeCategory),
    [activeCategory]
  )

  return (
    <section id="menu" className="py-24 px-4 bg-gradient-to-b from-amber-50 via-white to-amber-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-900">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-10">
          <p className="uppercase tracking-[0.3em] text-amber-500 text-sm">
            Crafted daily
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-amber-50">
            Sensory Coffee Menu
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Small-batch roasts inspired by Dhaka’s coffee culture. Choose your mood, sip your story.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              type="button"
              key={category}
              onClick={() => setActiveCategory(category)}
              aria-pressed={activeCategory === category}
              className={`px-5 py-2 rounded-full border transition-all duration-200 ${
                activeCategory === category
                  ? 'bg-amber-500 text-white border-transparent shadow-lg shadow-amber-200/40'
                  : 'bg-white dark:bg-gray-900 border-amber-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:border-amber-400'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>

        {filteredItems.length === 0 && (
          <p className="text-center text-gray-500 dark:text-gray-400 mt-8">
            No beverages found in this category. Choose another roast.
          </p>
        )}
      </div>
    </section>
  )
}

export default MenuSection

