# Coffee House - Landing Page

A modern, fully responsive landing page for a coffee shop built with React.js, Redux Toolkit, and Tailwind CSS.

## 📋 Project Overview

This project is a complete coffee shop landing page featuring:
- Hero section with coffee shop branding
- Interactive menu with 8 coffee items
- About Us section
- Customer testimonials
- Contact section with map and hours
- Light/Dark theme switcher
- Favorites system with localStorage persistence
- Fully responsive design (mobile, tablet, desktop)

## 🚀 Features

### Core Features
- ✅ **Responsive Design**: Works perfectly on mobile, tablet, and desktop
- ✅ **Theme Switcher**: Toggle between light and dark mode
- ✅ **Favorites System**: Add/remove menu items to favorites
- ✅ **Smooth Scrolling**: Navigate between sections smoothly
- ✅ **Mobile Menu**: Hamburger menu for mobile devices
- ✅ **LocalStorage**: Theme and favorites persist after page refresh

### Technical Stack
- **React.js**: Functional components with hooks
- **Redux Toolkit**: State management for theme and favorites
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Vite**: Fast build tool and development server

## 📦 Installation

### Prerequisites
Make sure you have Node.js installed on your computer. You can download it from [nodejs.org](https://nodejs.org/).

### Step-by-Step Installation

1. **Open Terminal/Command Prompt**
   - On Windows: Press `Win + R`, type `cmd`, and press Enter
   - On Mac/Linux: Open Terminal

2. **Navigate to Project Directory**
   ```bash
   cd "D:\Progressing\SELF\Coffee House"
   ```

3. **Install Dependencies**
   ```bash
   npm install
   ```
   This command reads the `package.json` file and installs all required packages (React, Redux, Tailwind, etc.)

   **What this does:**
   - Downloads React and React DOM
   - Downloads Redux Toolkit and React-Redux
   - Downloads Tailwind CSS and its dependencies
   - Downloads Vite (the build tool)

## 🏃 Running the Project

### Development Mode
To start the development server:

```bash
npm run dev
```

After running this command, you should see output like:
```
  VITE v5.x.x  ready in xxx ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

Open your browser and go to `http://localhost:5173/` to see your app!

**Note:** The development server will automatically reload when you make changes to the code.

### Building for Production
To create a production build:

```bash
npm run build
```

This creates an optimized version of your app in the `dist` folder.

### Preview Production Build
To preview the production build:

```bash
npm run preview
```

## 📁 Project Structure

```
coffee-house/
├── src/
│   ├── components/          # React components
│   │   ├── Header.jsx       # Navigation, theme toggle, favorites counter
│   │   ├── Hero.jsx         # Hero section
│   │   ├── MenuCard.jsx     # Individual menu item card
│   │   ├── MenuSection.jsx  # Menu section with all items
│   │   ├── About.jsx        # About Us section
│   │   ├── Testimonials.jsx # Customer reviews
│   │   ├── Contact.jsx      # Contact info and map
│   │   └── Footer.jsx       # Footer
│   ├── redux/               # Redux state management
│   │   ├── themeSlice.js    # Theme (light/dark) state
│   │   ├── favoritesSlice.js # Favorites state
│   │   └── store.js         # Redux store configuration
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles and Tailwind imports
├── index.html               # HTML template
├── package.json             # Project dependencies
├── vite.config.js          # Vite configuration
├── tailwind.config.js      # Tailwind CSS configuration
└── README.md               # This file
```

## 🎨 How It Works

### Redux State Management

**Theme Slice** (`src/redux/themeSlice.js`):
- Manages light/dark mode
- Saves theme preference to localStorage
- Provides `toggleTheme` action

**Favorites Slice** (`src/redux/favoritesSlice.js`):
- Manages favorite menu items
- Stores array of favorite item IDs
- Provides `addFavorite` and `removeFavorite` actions
- Saves favorites to localStorage

### Components

Each component is a separate file in the `components` folder:
- **Header**: Fixed navigation bar with menu, theme toggle, and favorites counter
- **Hero**: Main banner section at the top
- **MenuSection**: Displays all 8 coffee items in a responsive grid
- **MenuCard**: Individual coffee item with favorite button
- **About**: Coffee shop story section
- **Testimonials**: Customer reviews section
- **Contact**: Contact information and embedded map
- **Footer**: Footer with copyright info

### Responsive Design

The project uses Tailwind CSS responsive classes:
- `md:` prefix = applies on medium screens (tablets) and up
- `lg:` prefix = applies on large screens (desktops) and up
- `xl:` prefix = applies on extra large screens and up

Example: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- Mobile: 1 column
- Tablet: 2 columns
- Desktop: 3 columns

## 🎯 Key Concepts for Beginners

### React Hooks Used

1. **useState**: Manages component-level state (e.g., mobile menu open/closed)
   ```javascript
   const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
   ```

2. **useSelector**: Reads data from Redux store
   ```javascript
   const theme = useSelector((state) => state.theme.mode)
   ```

3. **useDispatch**: Triggers Redux actions
   ```javascript
   const dispatch = useDispatch()
   dispatch(toggleTheme())
   ```

4. **useEffect**: Runs code after component renders
   ```javascript
   useEffect(() => {
     // Apply theme class to HTML element
   }, [theme])
   ```

### Redux Concepts

- **Store**: Central place where all app state lives
- **Slice**: Collection of reducer logic for one feature
- **Action**: Object that describes what happened (e.g., "toggle theme")
- **Reducer**: Function that updates state based on actions
- **Dispatch**: Function to send actions to the store

### Tailwind CSS

Tailwind uses utility classes instead of writing custom CSS:
- `bg-blue-500` = background color blue
- `text-center` = center text
- `p-4` = padding 16px (4 * 4px)
- `rounded-lg` = large border radius
- `dark:bg-gray-800` = dark background in dark mode

## 🛠️ Common Commands

```bash
# Install dependencies (first time only)
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📝 Notes

- **LocalStorage**: Theme and favorites are saved in browser's localStorage, so they persist after page refresh
- **Images**: Currently using emoji placeholders. Replace with actual images from Unsplash.com
- **Map**: The Google Maps embed URL in Contact.jsx is a placeholder. Replace with your actual location's embed URL

## 🐛 Troubleshooting

### Port Already in Use
If port 5173 is already in use:
```bash
# Vite will automatically try the next available port
# Or specify a different port:
npm run dev -- --port 3000
```

### Dependencies Not Installing
Try deleting `node_modules` folder and `package-lock.json`, then run:
```bash
npm install
```

### Build Errors
Make sure all files are saved and there are no syntax errors. Check the terminal for specific error messages.

## 📸 Screenshots

Take screenshots of your app in:
1. Mobile view (use browser dev tools or resize window)
2. Tablet view
3. Desktop view

Save them in a `screenshots` folder for submission.

## 👤 Author Information

**Name:** [Your Name Here]  
**Email:** [Your Email Here]

## 📄 License

This project is created for educational purposes as part of a job interview assignment.

---

**Good luck with your interview! ☕🚀**

