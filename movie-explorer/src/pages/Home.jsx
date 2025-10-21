import MovieCard from "../Components/MovieCard";
import SearchBar from "../Components/SearchBar";
import CategoryFilter from "../Components/CategoryFilter";
import useFetchMovies from "../Hooks/useFetchMovies";
import useFavorites from "../Hooks/useFavorites";
import { useState } from "react";
import { motion } from "framer-motion"; // For animations

export default function Home() {
  const { movies, loading } = useFetchMovies();
  const { favorites, toggleFavorite } = useFavorites();
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const categories = [...new Set(movies.flatMap((m) => m.genres))];

  const filteredMovies = movies.filter((movie) => {
    const matchesSearch = movie.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = selectedCategory ? movie.genres.includes(selectedCategory) : true;
    return matchesSearch && matchesCategory;
  });

  if (loading) return <p>Loading movies...</p>;

  return (
    <div className="p-4">
      <SearchBar search={search} setSearch={setSearch} />
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      {filteredMovies.length === 0 ? (
        <p>No movies found</p>
      ) : (
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {filteredMovies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onAddFavorite={toggleFavorite}
              isFavorite={favorites.some((m) => m.id === movie.id)}
            />
          ))}
        </motion.div>
      )}
    </div>
  );
}
