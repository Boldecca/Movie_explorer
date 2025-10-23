const API_BASE_URL = "https://api.tvmaze.com"

export async function fetchMovies() {
  try {
    const response = await fetch(`${API_BASE_URL}/shows`)
    if (!response.ok) {
      throw new Error("Failed to fetch movies")
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error("Error fetching movies:", error)
    throw error
  }
}

export async function fetchMovieById(id) {
  try {
    const response = await fetch(`${API_BASE_URL}/shows/${id}`)
    if (!response.ok) {
      throw new Error("Failed to fetch movie details")
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error("Error fetching movie details:", error)
    throw error
  }
}
