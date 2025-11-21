import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../redux/themeSlice";

const navLinks = [
  { id: "home", label: "Home" },
  { id: "menu", label: "Menu" },
  { id: "about", label: "About" },
  { id: "testimonials", label: "Testimonials" },
  { id: "contact", label: "Contact" },
];

const SCROLL_THRESHOLD = 32;

// Heart icon component (outline -> filled). Adds subtle pulse + pop when there are favorites.
const HeartIcon = ({ filled }) => (
  <span
    className={`relative inline-flex items-center justify-center w-8 h-8 rounded-full transition-transform transform ${
      filled ? "scale-100 motion-safe:animate-pulse" : "hover:scale-105"
    }`}
    aria-hidden="true"
  >
    <svg
      viewBox="0 0 24 24"
      className={`w-5 h-5 transition-colors duration-300 ${
        filled ? "text-rose-500" : "text-slate-400 dark:text-slate-500"
      }`}
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth="1.6"
    >
      <path
        d="M12.1 21s-6.3-4.9-8.4-9.0C1.7 8.4 2.8 5 6 5c1.7 0 3.1.9 4.1 2.3C11.9 5.9 13.3 5 15 5c3.2 0 4.3 3.4 2.3 7.0C18.4 16.1 12.1 21 12.1 21z"
        className={filled ? "" : "fill-transparent"}
      />
    </svg>
    {/* subtle ping ring when filled */}
    {filled && (
      <span className="absolute -inset-1 rounded-full opacity-40 motion-safe:animate-ping" />
    )}
  </span>
);

// Redesigned logo badge (compact SVG — replace or tweak as needed)
const LogoBadge = () => (
  <span className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500 via-orange-500 to-rose-500 text-white shadow-lg shadow-amber-200/40">
    <svg viewBox="0 0 32 32" className="h-7 w-7" aria-hidden="true" fill="none">
      <g
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-white"
      >
        {/* Coffee cup base */}
        <path d="M8 18c0 4 4 6 8 6s8-2 8-6V12H8v6z" />
        {/* Steam lines */}
        <path d="M11 9c0-1.5 1.3-2.5 1-4" className="opacity-90" />
        <path d="M15 9c0-1.5 1.3-2.5 1-4" className="opacity-75" />
      </g>
    </svg>
  </span>
);

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const favoritesCount = useSelector((state) => state.favorites.items.length);
  const theme = useSelector((state) => state.theme.mode);
  const dispatch = useDispatch();

  const handleThemeToggle = () => dispatch(toggleTheme());

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
      setActiveSection(sectionId);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > SCROLL_THRESHOLD);

      const sections = navLinks
        .map((link) => document.getElementById(link.id))
        .filter(Boolean);

      const current = sections.find((section) => {
        const rect = section.getBoundingClientRect();
        return rect.top <= 120 && rect.bottom >= 120;
      });

      if (current?.id && current.id !== activeSection) {
        setActiveSection(current.id);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  const renderNavButton = (link, isMobile = false) => {
    const isActive = activeSection === link.id;
    const baseClasses = isMobile
      ? "block w-full text-left px-4 py-3 rounded-xl"
      : "relative px-4 py-2";

    return (
      <button
        key={link.id}
        onClick={() => scrollToSection(link.id)}
        aria-current={isActive ? "page" : undefined}
        className={`${baseClasses} group font-semibold text-sm uppercase tracking-[0.15em] transition-all duration-250 transform will-change-transform ${
          isMobile
            ? "text-slate-400 dark:text-slate-200 hover:bg-amber-50/70 dark:hover:bg-gray-800"
            : "text-slate-400 dark:text-slate-200"
        } ${
          isActive
            ? "text-amber-600 dark:text-amber-200"
            : "hover:text-amber-400"
        } focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300`}
      >
        <span className="relative inline-block">
          {/* Label text with hover/active visual */}
          <span
            className={`inline-block transform transition-transform duration-200 ${
              isActive
                ? "scale-105 -translate-y-0.5"
                : "group-hover:-translate-y-0.5"
            }`}
          >
            {link.label}
          </span>

          {/* Animated underline */}
          <span
            className={`absolute left-0 -bottom-1 h-0.5 bg-amber-500 dark:bg-amber-300 transition-all duration-300 ${
              isActive
                ? "w-full opacity-100"
                : "w-0 opacity-0 group-hover:w-full group-hover:opacity-80"
            }`}
            aria-hidden="true"
          />
        </span>
      </button>
    );
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-md shadow-md" : ""
      }`}
      style={{ background: "transparent" }}
    >
      <nav className="container mx-auto px-4 py-4 flex flex-wrap items-center justify-between gap-4">
        <button
          onClick={() => scrollToSection("home")}
          className="flex items-center gap-4 rounded-3xl px-3 py-2"
          aria-label="Coffee House logo"
        >
          <LogoBadge />
          <div className="text-left">
            <p className="text-xl font-extrabold tracking-wide text-amber-600 dark:text-amber-100 drop-shadow-sm">
              Coffee House
            </p>
            <p className="text-xs uppercase tracking-[0.4em] text-amber-600/80 dark:text-amber-200">
              Brewing Moments
            </p>
          </div>
        </button>

        <div className="hidden md:flex flex-1 items-center justify-center gap-3 rounded-3xl px-6 py-2">
          {navLinks.map((link) => renderNavButton(link))}
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/5 dark:bg-white/5">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-100 text-amber-700 dark:bg-amber-500/20 dark:text-amber-300">
              <HeartIcon filled={favoritesCount > 0} />
            </span>
            <span className="text-sm font-semibold text-slate-400 dark:text-slate-100">
              {favoritesCount}
            </span>
          </div>

          {/* Theme toggle with single sliding label */}
          <button
            onClick={handleThemeToggle}
            className="relative inline-flex items-center w-20 h-10 rounded-full border border-white/10 bg-white/5 dark:bg-white/5 px-2 shadow-sm focus:outline-none"
            aria-label={`Switch to ${
              theme === "light" ? "dark" : "light"
            } mode`}
          >
            {theme === "dark" ? (
              <span className="absolute left-3 text-xs font-semibold transition-all duration-300 select-none transform -translate-x-0 opacity-100">
                {/* Dark */}
              </span>
            ) : null}

            {theme === "light" ? (
              <span className="absolute right-3 text-xs font-semibold transition-all duration-300 select-none transform translate-x-0 opacity-100">
                {/* Light */}
              </span>
            ) : null}

            <span
              className={`relative inline-flex items-center justify-center h-8 w-8 rounded-full bg-amber-500 text-white text-sm font-semibold transition-transform duration-300 transform ${
                theme === "dark" ? "translate-x-0" : "translate-x-8"
              }`}
            >
              {theme === "light" ? "☀" : "🌙"}
            </span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-2xl border border-white/10 bg-white/5 text-slate-700 dark:text-slate-200"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="w-full md:hidden bg-white/95 dark:bg-gray-900/95 rounded-2xl shadow-2xl mt-2 py-4 space-y-2 border border-white/5">
            {navLinks.map((link) => renderNavButton(link, true))}
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
