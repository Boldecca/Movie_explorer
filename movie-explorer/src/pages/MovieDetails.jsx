import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchMovie() {
      const res = await axios.get(`https://api.tvmaze.com/shows/${id}`);
      setMovie(res.data);
    }
    fetchMovie();
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">{movie.name}</h1>
      <img src={movie.image?.medium} alt={movie.name} className="my-4 rounded" />
      <p dangerouslySetInnerHTML={{ __html: movie.summary }}></p>
      <p className="mt-2">Genres: {movie.genres.join(", ")}</p>
    </div>
  );
}
