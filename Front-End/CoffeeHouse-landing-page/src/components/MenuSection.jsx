import { useMemo, useState } from "react";
import MenuCard from './MenuCard'
import espressoImg from "../assets/Coffee House Image/Menu/items/Espresso.jpg";
import cappuccinoImg from "../assets/Coffee House Image/Menu/items/Cappuccino.jpg";
import latteImg from "../assets/Coffee House Image/Menu/items/Latte.jpg";
import icedCoffeeImg from "../assets/Coffee House Image/Menu/items/Iced Coffee.jpg";
import mochaImg from "../assets/Coffee House Image/Menu/items/Mocha.jpg";
import americanoImg from "../assets/Coffee House Image/Menu/items/Americano.jpg";
import coldBrewImg from "../assets/Coffee House Image/Menu/items/Cold Brew.jpg";
import frappuccinoImg from "../assets/Coffee House Image/Menu/items/Frappuccino.jpg";

const menuItems = [
  { id: 1, name: "Espresso", price: "$3.50", category: "Hot", origin: "Italy", notes: "Bold, velvety, cocoa finish", image: espressoImg },
  { id: 2, name: "Cappuccino", price: "$4.50", category: "Hot", origin: "Dhaka", notes: "Creamy microfoam, honey", image: cappuccinoImg },
  { id: 3, name: "Latte", price: "$4.75", category: "Hot", origin: "Brazil", notes: "Silky milk, caramel swirl", image: latteImg },
  { id: 4, name: "Iced Coffee", price: "$3.75", category: "Cold", origin: "Colombia", notes: "Chilled brew, citrus snap", image: icedCoffeeImg },
  { id: 5, name: "Mocha", price: "$5.00", category: "Hot", origin: "Peru", notes: "Dark chocolate, spice", image: mochaImg },
  { id: 6, name: "Americano", price: "$3.25", category: "Hot", origin: "Ethiopia", notes: "Bright crema, floral", image: americanoImg },
  { id: 7, name: "Cold Brew", price: "$4.25", category: "Cold", origin: "Kenya", notes: "Slow steep, caramel", image: coldBrewImg },
  { id: 8, name: "Frappuccino", price: "$5.50", category: "Blended", origin: "House Blend", notes: "Frappe, whipped cloud", image: frappuccinoImg }
]

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
              key={category}
              onClick={() => setActiveCategory(category)}
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

