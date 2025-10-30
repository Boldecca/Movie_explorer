import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { fetchMovieById } from "../utils/api"
import { useFavorites } from "../Hooks/useFavorites"

function MovieDetails() {
  const { id } = useParams()
  const [movie, setMovie] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const { favorites, addFavorite, removeFavorite } = useFavorites()

  useEffect(() => {
    const loadMovie = async () => {
      try {
        setLoading(true)
        const data = await fetchMovieById(id)
        setMovie(data)
      } catch (err) {
        setError("Failed to load movie details")
      } finally {
        setLoading(false)
      }
    }

    loadMovie()
  }, [id])

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-400">Loading movie details...</p>
        </div>
      </div>
    )
  }

  if (error || !movie) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-red-900/20 border border-red-900 rounded-lg p-4 text-center">
          <p className="text-red-400">{error || "Movie not found"}</p>
          <Link to="/" className="text-blue-400 hover:text-blue-300 mt-4 inline-block">
            ← Back to Home
          </Link>
        </div>
      </div>
    )
  }

  const isFavorite = favorites.some((fav) => fav.id === movie.id)

  const handleFavoriteClick = () => {
    if (isFavorite) {
      removeFavorite(movie.id)
    } else {
      addFavorite(movie)
    }
  }

  // Remove HTML tags from summary
  const cleanSummary = movie.summary ? movie.summary.replace(/<[^>]*>/g, "") : "No summary available."

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Link to="/" className="inline-flex items-center text-gray-400 hover:text-white mb-6 transition-colors">
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back to Home
      </Link>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Movie Poster */}
        <div className="md:col-span-1">
          <div className="sticky top-24">
            <div className="aspect-[2/3] rounded-lg overflow-hidden bg-gray-800">
              {movie.image?.original ? (
                <img
                  src={movie.image.original || "/placeholder.svg"}
                  alt={movie.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-600">
                  <span className="text-6xl">🎬</span>
                </div>
              )}
            </div>
            <button
              onClick={handleFavoriteClick}
              className={`w-full mt-4 py-3 rounded-lg font-medium transition-colors ${
                isFavorite ? "bg-red-600 hover:bg-red-700 text-white" : "bg-blue-600 hover:bg-blue-700 text-white"
              }`}
            >
              {isFavorite ? "❤️ Remove from Favorites" : "🤍 Add to Favorites"}
            </button>
          </div>
        </div>

        {/* Movie Details */}
        <div className="md:col-span-2">
          <h1 className="text-4xl font-bold text-white mb-4">{movie.name}</h1>

          <div className="flex flex-wrap items-center gap-4 mb-6">
            {movie.rating?.average && (
              <div className="flex items-center space-x-2 bg-gray-900 px-4 py-2 rounded-lg">
                <span className="text-yellow-500 text-xl">⭐</span>
                <span className="text-white font-semibold">{movie.rating.average}</span>
              </div>
            )}
            {movie.premiered && (
              <div className="bg-gray-900 px-4 py-2 rounded-lg">
                <span className="text-gray-400">{new Date(movie.premiered).getFullYear()}</span>
              </div>
            )}
            {movie.status && (
              <div className="bg-gray-900 px-4 py-2 rounded-lg">
                <span className="text-gray-400">{movie.status}</span>
              </div>
            )}
          </div>

          {movie.genres && movie.genres.length > 0 && (
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-gray-400 uppercase mb-2">Genres</h3>
              <div className="flex flex-wrap gap-2">
                {movie.genres.map((genre) => (
                  <span key={genre} className="px-3 py-1 bg-blue-600 text-white rounded-lg text-sm">
                    {genre}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="mb-6">
            <h3 className="text-sm font-semibold text-gray-400 uppercase mb-2">Summary</h3>
            <p className="text-gray-300 leading-relaxed">{cleanSummary}</p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {movie.language && (
              <div>
                <h3 className="text-sm font-semibold text-gray-400 uppercase mb-2">Language</h3>
                <p className="text-white">{movie.language}</p>
              </div>
            )}
            {movie.network?.name && (
              <div>
                <h3 className="text-sm font-semibold text-gray-400 uppercase mb-2">Network</h3>
                <p className="text-white">{movie.network.name}</p>
              </div>
            )}
            {movie.schedule?.days && movie.schedule.days.length > 0 && (
              <div>
                <h3 className="text-sm font-semibold text-gray-400 uppercase mb-2">Schedule</h3>
                <p className="text-white">
                  {movie.schedule.days.join(", ")}
                  {movie.schedule.time && ` at ${movie.schedule.time}`}
                </p>
              </div>
            )}
            {movie.officialSite && (
              <div>
                <h3 className="text-sm font-semibold text-gray-400 uppercase mb-2">Official Site</h3>
                <a
                  href={movie.officialSite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Visit Website →
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieDetails
