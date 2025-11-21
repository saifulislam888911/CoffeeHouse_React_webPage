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
  const theme = useSelector((state) => state.theme.mode)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

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
