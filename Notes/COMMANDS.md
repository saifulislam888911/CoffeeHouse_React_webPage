# Command Reference Guide

This file contains all the commands you'll need to work with this project.

## 📋 Initial Setup (First Time Only)

### 1. Install Node.js
If you don't have Node.js installed:
- Visit: https://nodejs.org/
- Download and install the LTS (Long Term Support) version
- Restart your computer after installation

### 2. Verify Node.js Installation
Open Command Prompt (Windows) or Terminal (Mac/Linux) and type:
```bash
node --version
npm --version
```
You should see version numbers. If you see an error, Node.js is not installed correctly.

### 3. Navigate to Project Folder
```bash
cd "D:\Progressing\SELF\Coffee House"
```

### 4. Install Project Dependencies
```bash
npm install
```

**What this does:**
- Reads `package.json` file
- Downloads all required packages (React, Redux, Tailwind, etc.)
- Creates `node_modules` folder with all dependencies
- Takes 1-3 minutes depending on your internet speed

**Expected output:**
```
added 234 packages, and audited 235 packages in 45s
```

## 🚀 Running the Project

### Start Development Server
```bash
npm run dev
```

**What happens:**
- Starts a local development server
- Usually runs on `http://localhost:5173`
- Opens automatically in your browser (sometimes)
- The server watches for file changes and auto-reloads

**To stop the server:**
- Press `Ctrl + C` in the terminal

### Build for Production
```bash
npm run build
```

**What this does:**
- Creates an optimized version of your app
- Outputs files to `dist` folder
- These files can be deployed to a web server

### Preview Production Build
```bash
npm run preview
```

**What this does:**
- Shows you how the production build looks
- Useful for testing before deployment

## 🔧 Troubleshooting Commands

### If npm install fails:
```bash
# Delete node_modules and package-lock.json first
# Then reinstall
npm install
```

### If you get port already in use error:
```bash
# Use a different port
npm run dev -- --port 3000
```

### Clear npm cache (if needed):
```bash
npm cache clean --force
```

## 📦 Understanding package.json Scripts

In `package.json`, you'll see these scripts:

```json
{
  "scripts": {
    "dev": "vite",           // Start development server
    "build": "vite build",   // Build for production
    "preview": "vite preview" // Preview production build
  }
}
```

When you run `npm run dev`, it executes the `vite` command.

## 💡 Tips

1. **Always run commands in the project directory**
   - Make sure you're in `D:\Progressing\SELF\Coffee House` folder

2. **Keep the terminal open while developing**
   - The dev server needs to keep running
   - You'll see errors in the terminal if something goes wrong

3. **First time setup takes longer**
   - Installing dependencies can take a few minutes
   - Subsequent runs are much faster

4. **If something doesn't work:**
   - Check the terminal for error messages
   - Make sure you're in the correct directory
   - Try deleting `node_modules` and running `npm install` again

## 🎯 Quick Reference

| Command | What It Does |
|---------|-------------|
| `npm install` | Install all dependencies (first time) |
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm run preview` | Preview production build |
| `Ctrl + C` | Stop the running server |

---

**Remember:** Always run these commands in the project directory!

