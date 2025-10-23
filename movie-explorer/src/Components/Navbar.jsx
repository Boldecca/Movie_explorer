import { Link, useLocation } from "react-router-dom"
import { useFavorites } from "../hooks/useFavorites"

function Navbar() {
  const location = useLocation()
  const { favorites } = useFavorites()

  const isActive = (path) => {
    return location.pathname === path
  }

  return (
    <nav className="bg-black border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-white">🎬</span>
            <span className="text-xl font-bold text-white">Movie Explorer</span>
          </Link>

          <div className="flex items-center space-x-6">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors ${
                isActive("/") ? "text-white" : "text-gray-400 hover:text-white"
              }`}
            >
              Home
            </Link>
            <Link
              to="/favorites"
              className={`text-sm font-medium transition-colors flex items-center space-x-2 ${
                isActive("/favorites") ? "text-white" : "text-gray-400 hover:text-white"
              }`}
            >
              <span>Favorites</span>
              {favorites.length > 0 && (
                <span className="bg-blue-600 text-white text-xs rounded-full px-2 py-0.5">{favorites.length}</span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
