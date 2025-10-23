import { Link } from "react-router-dom"
import MovieCard from "../Components/MovieCard"
import { useFavorites } from "../Hooks/useFavorites"

function Favorites() {
  const { favorites } = useFavorites()

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-2">My Favorites</h1>
        <p className="text-gray-400">
          {favorites.length === 0
            ? "You have 0 favorite movies"
            : `You have ${favorites.length} favorite ${favorites.length === 1 ? "movie" : "movies"}`}
        </p>
      </div>

      {favorites.length === 0 ? (
        <div className="text-center py-20">
          <span className="text-6xl mb-4 block">❤️</span>
          <h3 className="text-xl font-semibold text-white mb-2">No favorites yet</h3>
          <p className="text-gray-400 mb-6">Start adding movies to your favorites to see them here</p>
          <Link
            to="/"
            className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
          >
            Browse Movies
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {favorites.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Favorites
