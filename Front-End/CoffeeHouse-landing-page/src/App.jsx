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
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Header with navigation, theme toggle, and favorites counter */}
      <Header />
      
      {/* Hero section - the main banner at the top */}
      <Hero />
      
      {/* Menu section - displays coffee items */}
      <MenuSection />
      
      {/* About Us section */}
      <About />
      
      {/* Testimonials section */}
      <Testimonials />
      
      {/* Contact section with map and hours */}
      <Contact />
      
      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App

