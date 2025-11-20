// Hero Component
// The main banner section at the top of the page

function Hero() {
  return (
    <section
      id="home"
      className="pt-24 pb-16 px-4 bg-gradient-to-br from-amber-50 to-amber-100 dark:from-gray-800 dark:to-gray-900 min-h-screen flex items-center justify-center"
    >
      <div className="container mx-auto text-center">
        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold text-amber-900 dark:text-amber-200 mb-4 animate-fade-in">
          Welcome to Coffee House
        </h1>
        
        {/* Tagline */}
        <p className="text-xl md:text-2xl text-amber-700 dark:text-amber-300 mb-8 animate-fade-in-delay">
          Where Every Cup Tells a Story ☕
        </p>
        
        {/* Call to Action Button */}
        <button
          onClick={() => {
            const menuSection = document.getElementById('menu')
            if (menuSection) {
              menuSection.scrollIntoView({ behavior: 'smooth' })
            }
          }}
          className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
        >
          Explore Our Menu
        </button>
      </div>
    </section>
  )
}

export default Hero

