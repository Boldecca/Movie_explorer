import MovieCard from "../Components/MovieCard";
import useFavorites from "../Hooks/useFavorites";

export default function Favorites() {
  const { favorites, toggleFavorite } = useFavorites();

  if (favorites.length === 0) return <p>You have 0 favorite movies.</p>;

  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
      {favorites.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onAddFavorite={toggleFavorite}
          isFavorite={true}
        />
      ))}
    </div>
  );
}
