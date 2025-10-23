# Movie Explorer

A modern single-page application (SPA) built with React, Vite, and Tailwind CSS that allows users to explore movies and TV shows.

## Features

- 🎬 Browse a collection of movies and TV shows
- 🔍 Search movies by title
- 🏷️ Filter movies by genre/category
- ❤️ Add movies to favorites (persisted in localStorage)
- 📱 Fully responsive design
- 🎨 Modern dark theme UI
- 🚀 Fast performance with Vite

## Technologies

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **TVMaze API** - Movie and TV show data

## Installation Steps

1. **Clone the repository**
   \`\`\`bash
   git clone <your-repo-url>
   cd movie-explorer
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Start the development server**
   \`\`\`bash
   npm run dev
   \`\`\`

4. **Open your browser**
   Navigate to `http://localhost:5173`

## Build for Production

\`\`\`bash
npm run build
\`\`\`

The built files will be in the `dist` directory.

## Project Structure

\`\`\`
/src
  /components
    Navbar.jsx          - Navigation bar with links
    MovieCard.jsx       - Reusable movie card component
    SearchBar.jsx       - Search input component
    CategoryFilter.jsx  - Genre filter buttons
  /pages
    Home.jsx           - Main page with movie list
    MovieDetails.jsx   - Individual movie details page
    Favorites.jsx      - Favorite movies page
  /hooks
    useFetchMovies.js  - Custom hook for fetching movies
    useFavorites.js    - Custom hook for managing favorites
  /utils
    api.js             - API utility functions
  App.jsx              - Main app component with routing
  main.jsx             - App entry point
\`\`\`

## Features Implemented

✅ React environment setup with Vite  
✅ JSX rendering with dynamic content  
✅ Reusable components (MovieCard, Navbar, SearchBar, CategoryFilter)  
✅ React Router for navigation (/, /movie/:id, /favorites)  
✅ Props passing between components  
✅ State management with useState  
✅ Event handling (search, filter, favorites)  
✅ Conditional rendering (no results, empty favorites)  
✅ List rendering with unique keys  
✅ useEffect for data fetching  
✅ Custom hooks (useFetchMovies, useFavorites)  
✅ localStorage persistence for favorites  

## Live Demo

[Add your live demo link here]

## Screenshots

[Add screenshots of your application here]

---

Built with ❤️ using React + Vite + Tailwind CSS
