import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useMoviesStore } from "@stores/index";
import { Movie } from "@interfaces/index";
import { MoviePoster } from "./MoviePoster";
import { MovieDescription } from "./MovieDescription";

export const SingleMoviePage = () => {
  const params = useParams<{ movieId: string }>();
  const movieId = params.movieId;
  const { movies } = useMoviesStore();
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    const selectedMovie = movies.find((m) => m.id.toString() === movieId);
    setMovie(selectedMovie || null);
  }, [movieId, movies]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <main className="min-h-screen p-4 text-white">
      <section
        className="relative w-full h-screen"
        style={{
          backgroundImage: `url(${movie.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black flex items-center">
          <div className="container mx-auto px-4 flex flex-wrap">
            <MovieDescription movie={movie} />
            <MoviePoster movie={movie} />
          </div>
        </div>
      </section>
    </main>
  );
};
