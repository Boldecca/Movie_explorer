"use client"

import { useState } from "react"
import SearchBar from "../Components/SearchBar"
import CategoryFilter from "../Components/CategoryFilter"
import MovieCard from "../components/MovieCard"
import { useFetchMovies } from "../Hooks/UseFetchMovies"

function Home() {
  const { movies, loading, error } = useFetchMovies()
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  // Extract unique genres from movies
  const categories = [...new Set(movies.flatMap((movie) => movie.genres || []))].sort()

  // Filter movies based on search and category
  const filteredMovies = movies.filter((movie) => {
    const matchesSearch = movie.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "All" || (movie.genres && movie.genres.includes(selectedCategory))
    return matchesSearch && matchesCategory
  })

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-2">Explore Movies & TV Shows</h1>
        <p className="text-gray-400">Discover your next favorite show from our collection</p>
      </div>

      {/* Search and Filter */}
      <div className="mb-8 space-y-4">
        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        <CategoryFilter
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          categories={categories}
        />
      </div>

      {/* Loading State */}
      {loading && (
        <div className="flex items-center justify-center py-20">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-400">Loading movies...</p>
          </div>
        </div>
      )}

      {/* Error State */}
      {error && (
        <div className="bg-red-900/20 border border-red-900 rounded-lg p-4 text-center">
          <p className="text-red-400">{error}</p>
        </div>
      )}

      {/* No Results */}
      {!loading && !error && filteredMovies.length === 0 && (
        <div className="text-center py-20">
          <span className="text-6xl mb-4 block">🎬</span>
          <h3 className="text-xl font-semibold text-white mb-2">No movies found</h3>
          <p className="text-gray-400">Try adjusting your search or filter criteria</p>
        </div>
      )}

      {/* Movie Grid */}
      {!loading && !error && filteredMovies.length > 0 && (
        <>
          <div className="mb-4 text-gray-400">
            Showing {filteredMovies.length} {filteredMovies.length === 1 ? "result" : "results"}
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {filteredMovies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default Home
