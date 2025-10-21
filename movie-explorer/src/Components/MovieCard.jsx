import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function MovieCard({ movie, onAddFavorite, isFavorite }) {
  return (
    <motion.div
      className="border p-4 rounded shadow hover:shadow-lg transition cursor-pointer"
      whileHover={{ scale: 1.05 }}
    >
      <img src={movie.image?.medium} alt={movie.name} className="w-full h-48 object-cover rounded" />
      <h2 className="text-lg font-bold mt-2">{movie.name}</h2>
      <p className="text-sm">{movie.genres?.join(", ")}</p>
      <div className="mt-2 flex justify-between items-center">
        <Link to={`/movie/${movie.id}`} className="text-blue-600 hover:underline">
          Details
        </Link>
        <button
          onClick={() => onAddFavorite(movie)}
          className={`px-2 py-1 rounded ${isFavorite ? "bg-red-500" : "bg-green-500"} text-white`}
        >
          {isFavorite ? "Remove" : "Add"}
        </button>
      </div>
    </motion.div>
  );
}
