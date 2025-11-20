// MenuSection Component
// Displays all coffee menu items in a grid layout

import MenuCard from './MenuCard'

// Menu items data (as specified in the assignment)
const menuItems = [
  { id: 1, name: "Espresso", price: "$3.50", category: "Hot" },
  { id: 2, name: "Cappuccino", price: "$4.50", category: "Hot" },
  { id: 3, name: "Latte", price: "$4.75", category: "Hot" },
  { id: 4, name: "Iced Coffee", price: "$3.75", category: "Cold" },
  { id: 5, name: "Mocha", price: "$5.00", category: "Hot" },
  { id: 6, name: "Americano", price: "$3.25", category: "Hot" },
  { id: 7, name: "Cold Brew", price: "$4.25", category: "Cold" },
  { id: 8, name: "Frappuccino", price: "$5.50", category: "Cold" }
]

function MenuSection() {
  return (
    <section id="menu" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="container mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 dark:text-gray-200 mb-4">
          Our Menu
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
          Discover our handcrafted coffee selections
        </p>
        
        {/* Menu Grid */}
        {/* 
          Grid layout:
          - 1 column on mobile (grid-cols-1)
          - 2 columns on tablet (md:grid-cols-2)
          - 3 columns on desktop (lg:grid-cols-3)
          - 4 columns on large screens (xl:grid-cols-4)
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {/* Map through menu items and render a MenuCard for each */}
          {menuItems.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default MenuSection

