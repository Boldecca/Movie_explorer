# 🎬 Movie Explorer SPA

A **Single Page Application (SPA)** built with **React**, allowing users to explore a list of movies. Users can search, filter by category, view movie details, and manage their favorite movies.  

---

## **Features**

- View a list of movies fetched from the **TVMaze API**
- Search movies by name
- Filter movies by category (genre)
- View detailed movie information
- Add or remove movies from **Favorites**
- Dark/Light mode toggle
- Smooth animations using **Framer Motion**
- Persistent favorites using **localStorage**
- Fully responsive UI with **Tailwind CSS**
- Client-side routing with **React Router**

---

## **Technologies Used**

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/) – fast React setup
- [Tailwind CSS](https://tailwindcss.com/) – utility-first CSS
- [React Router](https://reactrouter.com/) – routing
- [Axios](https://axios-http.com/) – API calls
- [Framer Motion](https://www.framer.com/motion/) – animations
- TVMaze API ([https://www.tvmaze.com/api](https://www.tvmaze.com/api)) – movie data
- **LocalStorage** – persisting favorites

---

## **Folder Structure**

src/
components/
Navbar.jsx
MovieCard.jsx
SearchBar.jsx
CategoryFilter.jsx
pages/
Home.jsx
MovieDetails.jsx
Favorites.jsx
hooks/
useFetchMovies.js
useFavorites.js
utils/
api.js
App.jsx
main.jsx


- `components/` → Reusable UI components
- `pages/` → Different routes/pages
- `hooks/` → Custom hooks for fetching data and favorites
- `utils/` → API utility functions

---

## **Installation Steps**

1. **Clone the repository**

```bash
git clone https://github.com/Boldecca/Movie_explorer.git
cd movie-explorer

## **Live Demo**

Try the app online: [https://yourusername.github.io/movie-explorer/](https://yourusername.github.io/movie-explorer/)
