<<<<<<< HEAD
# CoffeeHouse_React_webPage
Summary :
- Front-End : React, Redux.
- Design-Style : TailwindCSS.
- Type : Web Application.

Version :
- React : React 18 + Vite
- Redux : Redux Toolkit + React Redux
- Style : Tailwind CSS 3


# Project : CoffeeHouse-webPage
Helped From : AI IDE, Self-Practice, Self-Study.


# Branch : ("Development-2")
Development (DevWithNotes-02, DevWithNotes-03, DevWithNotes-04) : For Updating new features. Always Upto Date. Clean Codes (Delete Comments & Notes).0


# Company : Bangladesh Thalassemia Foundation :
Asssignment : Job Interview Assignment Project ;
Position : Front-End Developer ;
Title : A Coffee Shop Landing Page ;
Link : ;
Study : Self-Practice, Self-Study.


# Website :
Host / Live Link : https://coffeehouse-app.netlify.app/
=======
# Coffee House Landing Page
- Web App Host Link : https://coffeehouse-app.netlify.app/

A modern single-page experience for Coffee House built with React, Redux Toolkit, and Tailwind CSS. 
The layout highlights the brand story, menu, testimonials, and contact info 
while delivering responsive layouts, smooth animations, and persistent UI preferences.


## Tech Stack
- React 18 + Vite
- Redux Toolkit + React Redux
- Tailwind CSS 3 with dark mode (class strategy)
- LocalStorage persistence for theme + favorites

## Quick Setup Guide :
Quick checklist / commands recap :
	1. Create app:
			`npm create vite@latest coffee-house -- --template react`
			`cd coffee-house`
			`npm install`
	2. Install libs:
			`npm install @reduxjs/toolkit react-redux`
			`npm install -D tailwindcss postcss autoprefixer`
			`npx tailwindcss init -p`
	3. Edit tailwind.config.cjs → darkMode: 'class'; add @tailwind imports to src/index.css.
	4. Add store.js, slices, wrap Provider, add useEffect to toggle .dark.
	5. Start dev server:
			`npm run dev`


## Features
- Hero, curated menu (8 drinks), about, testimonials, contact, and footer sections
- Redux-powered theme toggle with smooth transitions and persistence between sessions
- Favorites slice with add/remove buttons on every menu card and a live counter in the header
- Menu category filters, hover/touch animations, and responsive grids for desktop/tablet/mobile
- Smooth-scroll navigation, accessible skip link, and a hamburger menu for smaller screens
- Testimonial carousel with autoplay, pause/resume, arrows, dots, and keyboard-friendly controls
- Embedded Google Map, full contact block, hours, and CTA for social reviews


## Setup : (To Run The Project on Different Local Device)
1. Install dependencies  
   `npm install`
2. Start the development server  
   `npm run dev`
3. Build for production  
   `npm run build`
4. Preview the production build locally  
   `npm run preview`


## Screenshots
Three required screenshots are already included:
- `screenshots/mobile.pdf`
- `screenshots/tablet.pdf`
- `screenshots/desktop.pdf`


## Deployment :
Host Link :
https://coffeehouse-app.netlify.app/

Notes : Editing The code locally won't automatically update the live site. 
Here's what need to Do:
- Local Changes: Any changes you make on laptop will only affect local files.
- To Update the Live Site: (From Local)
	1. Save the changes
	2. Run 'npm run build' cmd to create a new production build
	3. Run 'netlify deploy --prod' cmd to upload the changes
>>>>>>> remotes/origin/DevWithNotes-04
