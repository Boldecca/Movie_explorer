import { useState, useEffect } from "react"

const FAVORITES_KEY = "movieExplorerFavorites"

export function useFavorites() {
  const [favorites, setFavorites] = useState([])

  // Load favorites from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(FAVORITES_KEY)
    if (stored) {
      try {
        setFavorites(JSON.parse(stored))
      } catch (err) {
        console.error("Error loading favorites:", err)
      }
    }
  }, [])

  // Save favorites to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites))
  }, [favorites])

  const addFavorite = (movie) => {
    setFavorites((prev) => {
      // Prevent duplicates
      if (prev.some((fav) => fav.id === movie.id)) {
        return prev
      }
      return [...prev, movie]
    })
  }

  const removeFavorite = (movieId) => {
    setFavorites((prev) => prev.filter((fav) => fav.id !== movieId))
  }

  const isFavorite = (movieId) => {
    return favorites.some((fav) => fav.id === movieId)
  }

  return {
    favorites,
    addFavorite,
    removeFavorite,
    isFavorite,
  }
}
