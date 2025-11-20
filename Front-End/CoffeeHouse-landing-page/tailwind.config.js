/** @type {import('tailwindcss').Config} */
// Tailwind CSS configuration
// This file tells Tailwind which files to scan for CSS classes
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // Enable dark mode using class strategy
  // This means we'll add/remove 'dark' class to toggle theme
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [],
}

