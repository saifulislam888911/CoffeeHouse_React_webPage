// Main App Component
// This is the root component that contains all other components

import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Header from './components/Header'
import Hero from './components/Hero'
import MenuSection from './components/MenuSection'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  // Get the current theme from Redux store
  // useSelector is a React hook that lets you read data from Redux store
  const theme = useSelector((state) => state.theme.mode)

  // useEffect runs after the component renders
  // This effect applies the theme class to the HTML element
  useEffect(() => {
    // Add or remove 'dark' class from document.documentElement (the <html> tag)
    // Tailwind uses this class to apply dark mode styles
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme]) // Re-run when theme changes

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-amber-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 text-gray-900 dark:text-gray-100">
      <a
        href="#menu"
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:left-4 focus:top-4 focus:px-4 focus:py-2 focus:rounded-full focus:bg-amber-500 focus:text-white focus:shadow-lg"
      >
        Skip to menu
      </a>
      <Header />
      <main id="main-content">
        <Hero />
        <MenuSection />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App

