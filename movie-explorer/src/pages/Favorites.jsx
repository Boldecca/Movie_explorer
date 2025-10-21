import MovieCard from "../Components/MovieCard";
import useFavorites from "../Hooks/useFavorites";
import { motion } from "framer-motion";

export default function Favorites() {
  const { favorites, toggleFavorite } = useFavorites();

  if (favorites.length === 0) return <p>You have 0 favorite movies.</p>;

  return (
    <motion.div 
      className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {favorites.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onAddFavorite={toggleFavorite}
          isFavorite={true}
        />
      ))}
    </motion.div>
  );
}
