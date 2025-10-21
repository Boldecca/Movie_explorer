import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchMovieById } from "../utils/api";

export default function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getMovie() {
      try {
        const data = await fetchMovieById(id);
        setMovie(data);
      } catch (error) {
        console.error("Failed to fetch movie:", error);
      } finally {
        setLoading(false);
      }
    }
    getMovie();
  }, [id]);

  if (loading) return <p>Loading movie details...</p>;
  if (!movie) return <p>Movie not found.</p>;

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">{movie.name}</h1>
      <img src={movie.image?.medium} alt={movie.name} className="my-4 rounded" />
      <p dangerouslySetInnerHTML={{ __html: movie.summary }}></p>
      <p className="mt-2">Genres: {movie.genres.join(", ")}</p>
    </div>
  );
}
