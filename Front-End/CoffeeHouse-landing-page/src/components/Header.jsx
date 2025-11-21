// Header Component
// Contains navigation, theme toggle button, and favorites counter

import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggleTheme } from '../redux/themeSlice'

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'menu', label: 'Menu' },
  { id: 'about', label: 'About' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'contact', label: 'Contact' }
]

const SCROLL_THRESHOLD = 32

const HeartIcon = ({ filled }) => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    className={`h-4 w-4 ${filled ? 'text-amber-600' : 'text-slate-400 dark:text-slate-500'}`}
    fill="currentColor"
  >
    <path d="M12 21s-6.32-4.97-8.38-9.06C1.84 8.4 2.76 5 5.87 5c1.68 0 3.08.92 4.13 2.36C11.94 5.92 13.34 5 15.02 5c3.11 0 4.03 3.4 2.25 6.94C18.32 16.03 12 21 12 21z" />
  </svg>
)

const LogoBadge = () => (
  <span className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500 via-orange-500 to-rose-500 text-white shadow-lg shadow-amber-200/60">
    <svg viewBox="0 0 32 32" className="h-7 w-7" aria-hidden="true" fill="none">
      <path
        d="M10 5h12a3 3 0 0 1 3 3v5a6 6 0 0 1-6 6h-1.5L17 24c0 1.66-1.34 3-3 3s-3-1.34-3-3l-.5-5H9a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3Z"
        stroke="currentColor"
        strokeWidth="1.6"
        className="text-white"
      />
      <path d="M12 9c0-1.1 1-2 1-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-white/80" />
      <path d="M16 8c0-1.1 1-2 1-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-white/80" />
      <path d="M20 9c0-1.1 1-2 1-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-white/80" />
    </svg>
  </span>
)

function Header() {
  // useState is a React hook for managing component state
  // mobileMenuOpen tracks whether the mobile menu is visible
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [scrolled, setScrolled] = useState(false)

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
      setActiveSection(sectionId)
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > SCROLL_THRESHOLD)

      const sections = navLinks
        .map((link) => document.getElementById(link.id))
        .filter(Boolean)

      const current = sections.find((section) => {
        const rect = section.getBoundingClientRect()
        return rect.top <= 120 && rect.bottom >= 120
      })

      if (current?.id && current.id !== activeSection) {
        setActiveSection(current.id)
      }
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [activeSection])

  const renderNavButton = (link, isMobile = false) => {
    const isActive = activeSection === link.id
    const baseClasses = isMobile
      ? 'block w-full text-left px-4 py-3 rounded-xl'
      : 'relative px-4 py-2'

    return (
      <button
        key={link.id}
        onClick={() => scrollToSection(link.id)}
        aria-current={isActive ? 'page' : undefined}
        className={`${baseClasses} group font-semibold text-sm uppercase tracking-[0.15em] transition-all duration-200 ${
          isMobile
            ? 'text-slate-700 dark:text-slate-200 hover:bg-amber-50/70 dark:hover:bg-gray-800'
            : 'text-slate-600 dark:text-slate-200 hover:text-amber-400'
        } ${isActive ? 'text-amber-600 dark:text-amber-200' : ''}`}
      >
        <span className="relative inline-block">
          {link.label}
          <span
            className={`absolute left-0 -bottom-1 h-0.5 bg-amber-500 dark:bg-amber-300 transition-all duration-200 ${
              isActive ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100'
            }`}
            aria-hidden="true"
          />
        </span>
      </button>
    )
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-50/80 dark:bg-gray-950/80 border-b border-white/40 dark:border-gray-800/70 backdrop-blur-2xl shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 py-4 flex flex-wrap items-center justify-between gap-4">
        <button
          onClick={() => scrollToSection('home')}
          className="flex items-center gap-4 rounded-3xl bg-white/70 dark:bg-gray-900/70 border border-white/60 dark:border-gray-800 px-4 py-2 shadow-lg shadow-amber-100/40"
          aria-label="Coffee House logo"
        >
          <LogoBadge />
          <div className="text-left">
            <p className="text-xl font-black tracking-wide text-slate-900 dark:text-amber-100">Coffee House</p>
            <p className="text-xs uppercase tracking-[0.4em] text-slate-500 dark:text-slate-400">Brewing Moments</p>
          </div>
        </button>

        <div className="hidden md:flex flex-1 items-center justify-center gap-3 rounded-3xl bg-white/80 dark:bg-gray-900/60 border border-white/60 dark:border-gray-800 px-6 py-2 shadow-lg shadow-amber-100/30">
          {navLinks.map((link) => renderNavButton(link))}
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-2 rounded-full border border-white/70 dark:border-gray-700 bg-white/80 dark:bg-gray-900/60 shadow-inner">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-100 text-amber-700 dark:bg-amber-500/20 dark:text-amber-300">
              <HeartIcon filled={favoritesCount > 0} />
            </span>
            <span className="text-sm font-semibold text-slate-800 dark:text-slate-100">
              {favoritesCount}
            </span>
          </div>

          <button
            onClick={handleThemeToggle}
            className="relative inline-flex items-center w-20 h-9 rounded-full border border-white/70 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-inner"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            <span
              className={`absolute inset-y-1 left-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-amber-500 text-white text-xs font-semibold shadow transition-transform duration-300 ${
                theme === 'dark' ? 'translate-x-9' : ''
              }`}
            >
              {theme === 'light' ? '☀' : '🌙'}
            </span>
            <span className="w-full pl-10 pr-3 text-xs font-semibold tracking-wide text-slate-500 dark:text-slate-300">
              {theme === 'light' ? 'Light' : 'Dark'}
            </span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-2xl border border-white/60 dark:border-gray-800 bg-white/80 dark:bg-gray-900/60 text-slate-700 dark:text-slate-200"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="w-full md:hidden bg-white/95 dark:bg-gray-900/95 rounded-2xl shadow-2xl mt-2 py-4 space-y-2 border border-white/70 dark:border-gray-800">
            {navLinks.map((link) => renderNavButton(link, true))}
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header

