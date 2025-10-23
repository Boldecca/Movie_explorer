"use client"

import { Link } from "react-router-dom"
import { useFavorites } from "../Hooks/useFavorites"

function MovieCard({ movie }) {
  const { favorites, addFavorite, removeFavorite } = useFavorites()
  const isFavorite = favorites.some((fav) => fav.id === movie.id)

  const handleFavoriteClick = (e) => {
    e.preventDefault()
    if (isFavorite) {
      removeFavorite(movie.id)
    } else {
      addFavorite(movie)
    }
  }

  return (
    <Link to={`/movie/${movie.id}`}>
      <div className="group relative bg-gray-900 rounded-lg overflow-hidden hover:ring-2 hover:ring-blue-600 transition-all duration-300">
        <div className="aspect-[2/3] overflow-hidden bg-gray-800">
          {movie.image?.medium ? (
            <img
              src={movie.image.medium || "/placeholder.svg"}
              alt={movie.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-600">
              <span className="text-4xl">🎬</span>
            </div>
          )}
        </div>

        <button
          onClick={handleFavoriteClick}
          className="absolute top-2 right-2 p-2 bg-black/70 rounded-full hover:bg-black transition-colors"
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
          <svg
            className={`w-5 h-5 ${isFavorite ? "fill-red-500 text-red-500" : "text-white"}`}
            fill={isFavorite ? "currentColor" : "none"}
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </button>

        <div className="p-4">
          <h3 className="text-white font-semibold text-lg mb-1 line-clamp-1">{movie.name}</h3>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-400">{movie.premiered ? new Date(movie.premiered).getFullYear() : "N/A"}</span>
            {movie.rating?.average && (
              <div className="flex items-center space-x-1">
                <span className="text-yellow-500">⭐</span>
                <span className="text-gray-300">{movie.rating.average}</span>
              </div>
            )}
          </div>
          {movie.genres && movie.genres.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-1">
              {movie.genres.slice(0, 2).map((genre) => (
                <span key={genre} className="text-xs px-2 py-1 bg-gray-800 text-gray-300 rounded">
                  {genre}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </Link>
  )
}

export default MovieCard
