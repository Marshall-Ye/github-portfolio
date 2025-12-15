# Portfolio Project - Quick Start Guide

## 🚀 Quick Commands

### First Time Setup
```bash
# Install dependencies
npm install
```

### Development (Local Testing)
```bash
# Start dev server with hot reload
npm run dev

# Opens at http://localhost:5173
# Note: Uses HashRouter, so URLs look like:
#   - http://localhost:5173/#/
#   - http://localhost:5173/#/logistics
#   - http://localhost:5173/#/games
```

### Build & Preview (Test Production Build)
```bash
# Build for production
npm run build

# Preview the production build locally
npm run preview

# Opens at http://localhost:4173/github-portfolio/
```

### Deploy to GitHub Pages
```bash
# Just push to main branch - GitHub Actions handles deployment automatically!
git add .
git commit -m "Your changes"
git push origin main

# The workflow will automatically:
# 1. Build your project
# 2. Deploy to gh-pages branch
# 3. Update https://marshall-ye.github.io/github-portfolio/
```

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── pages/
│   │   ├── Home.jsx       # Landing page with track selection
│   │   ├── Logistics.jsx  # Logistics & Automation portfolio
│   │   └── Games.jsx      # Video Game Projects portfolio
│   ├── main.jsx           # Entry point with routing
│   └── index.css          # Global styles
├── public/                # Static assets
├── dist/                  # Built files (generated, don't edit)
├── vite.config.js         # Vite config (base path for GitHub Pages)
└── package.json           # Dependencies and scripts
```

## 🔧 Key Configuration

- **Router**: HashRouter (works with GitHub Pages)
- **Base Path**: `/github-portfolio/` (configured in `vite.config.js`)
- **Deployment**: Automatic via GitHub Actions (`.github/workflows/deploy.yml`)

## 🌐 Live Site

- **URL**: https://marshall-ye.github.io/github-portfolio/
- **Deployment**: Automatic on push to `main` branch
- **Status**: Check GitHub Actions tab in your repo

## 🐛 Troubleshooting

### Dev server shows blank page?
- Check browser console for errors
- Make sure you're using HashRouter URLs: `/#/` not `/`

### Production build doesn't work?
- Run `npm run build` then `npm run preview` to test locally
- Check that `base: '/github-portfolio/'` is in `vite.config.js`

### Deployment failed?
- Check GitHub Actions tab for error logs
- Make sure `vite.config.js` has the correct base path

