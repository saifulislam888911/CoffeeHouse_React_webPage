// Header Component
// Contains navigation, theme toggle button, and favorites counter

import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggleTheme } from '../redux/themeSlice'

function Header() {
  // useState is a React hook for managing component state
  // mobileMenuOpen tracks whether the mobile menu is visible
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Get data from Redux store
  const favoritesCount = useSelector((state) => state.favorites.items.length)
  const theme = useSelector((state) => state.theme.mode)

  // useDispatch gives us a function to dispatch actions (trigger Redux actions)
  const dispatch = useDispatch()

  // Function to handle theme toggle
  const handleThemeToggle = () => {
    dispatch(toggleTheme())
  }

  // Function to scroll to a section smoothly
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setMobileMenuOpen(false) // Close mobile menu after clicking
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-800 shadow-md">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Brand Name */}
          <div className="text-2xl font-bold text-amber-600 dark:text-amber-400">
            ☕ Coffee House
          </div>

          {/* Desktop Navigation - hidden on mobile, visible on md screens and up */}
          <div className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-700 dark:text-gray-200 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('menu')}
              className="text-gray-700 dark:text-gray-200 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
            >
              Menu
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 dark:text-gray-200 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-gray-700 dark:text-gray-200 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 dark:text-gray-200 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
            >
              Contact
            </button>
          </div>

          {/* Right side: Favorites counter and Theme toggle */}
          <div className="flex items-center space-x-4">
            {/* Favorites Counter */}
            <div className="flex items-center space-x-2">
              <span className="text-xl">❤️</span>
              <span className="text-gray-700 dark:text-gray-200 font-semibold">
                {favoritesCount}
              </span>
            </div>

            {/* Theme Toggle Button */}
            <button
              onClick={handleThemeToggle}
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? '🌙' : '☀️'}
            </button>

            {/* Mobile Menu Button - visible on mobile, hidden on md screens and up */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile Menu - shown when mobileMenuOpen is true */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2">
            <button
              onClick={() => scrollToSection('home')}
              className="block w-full text-left px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('menu')}
              className="block w-full text-left px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
            >
              Menu
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="block w-full text-left px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
            >
              Contact
            </button>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header

