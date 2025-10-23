"use client"

import { useState, useEffect } from "react"
import { fetchMovies } from "../utils/api"

export function useFetchMovies() {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const loadMovies = async () => {
      try {
        setLoading(true)
        setError(null)
        const data = await fetchMovies()
        setMovies(data)
      } catch (err) {
        setError("Failed to load movies. Please try again later.")
        console.error("Error fetching movies:", err)
      } finally {
        setLoading(false)
      }
    }

    loadMovies()
  }, [])

  return { movies, loading, error }
}
