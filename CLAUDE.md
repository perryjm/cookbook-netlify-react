# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A React-based recipe cookbook application deployed on Netlify at https://perrys-cookbook.netlify.app. The app displays recipe cards with search/filter functionality and features an iOS-native design aesthetic with automatic light/dark mode support.

## Development Commands

```bash
npm start    # Start development server at http://localhost:3000 (includes OpenSSL legacy provider for Node 17+)
npm test     # Run tests in interactive watch mode
npm run build # Build production bundle to build/
```

## Architecture

### State Management
- **App.js** is a React class component that owns all application state
- Recipe data is imported from `src/recipes.json` and stored in `App` state
- Filtering happens at the App level via `onFilterChange` callback
- Filtered recipe list is passed down to `BootstrapCookBook` component

### Data Structure
Recipe data lives in **src/recipes.json** with this schema:
```json
{
  "id": "string",
  "name": "string",
  "tags": ["array", "of", "strings"],
  "url": "string",
  "image_url": "string",
  "backup_url": "string"
}
```

To add a recipe: Add a new entry to the recipes.json array with a unique id and all required fields.

### Search/Filter Logic (src/filterUtils.js)
- **AND logic by default**: Multiple search terms must all match (e.g., "dinner chicken" finds recipes matching both terms)
- **Word-prefix matching**: Search terms match the beginning of words in recipe names or tags
- Searches are case-insensitive
- `filterRecipesAnd()` implements the AND logic (currently used in App.js)
- `filterRecipesOr()` also available but not currently used

### Component Hierarchy
```
App (class component - manages state)
└── BootstrapCookBook (functional)
    ├── FilterBox (functional with useState for focus state)
    └── BootstrapCardRecipe (functional - repeated for each recipe)
```

### Theme System (src/theme.css)
- **Automatic light/dark mode** based on system preference using `prefers-color-scheme`
- CSS custom properties for all colors and theming
- iOS-inspired color palette and design tokens
- Smooth transitions between theme changes
- Reduced motion support for accessibility

### UI Framework
- **Modern iOS-native design aesthetic**
- CSS Grid layout for responsive recipe cards
- Custom CSS with iOS-style components (no React-Bootstrap in components)
- SF Pro font family (system fonts)
- iOS-style search bar with focus states
- Smooth animations and hover effects
- Sticky header with blur effect

### Styling Files
- **theme.css**: Global theme system with light/dark mode CSS variables
- **App.css**: Main app container and header styles
- **FilterBox.css**: iOS-style search bar styles
- **RecipeCard.css**: iOS-style card component styles
- **CookBook.css**: Grid layout and empty state styles

### Deployment
- Hosted on Netlify with automatic deployments from git
- No special Netlify configuration files (netlify.toml, _redirects) - uses default CRA build settings
- Production build generated with `npm run build`
- Uses `NODE_OPTIONS=--openssl-legacy-provider` for compatibility with Node.js 17+
