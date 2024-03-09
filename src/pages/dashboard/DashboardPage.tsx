import { useEffect, useState } from "react";
import { CarouselItems, MoviesCard } from "@components/index";
import { moviesApi } from "@api/movies.api";
import { Movie } from "@interfaces/index";

export const Dashboard = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await moviesApi.fetchMovies();
      setMovies(data);
    };

    fetchMovies();
  }, []);

  return (
    <>
      <section className="relative w-full py-52">
        <CarouselItems />
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {movies.map((movie) => (
          <MoviesCard key={movie.id} movie={movie} />
        ))}
      </section>
    </>
  );
};
