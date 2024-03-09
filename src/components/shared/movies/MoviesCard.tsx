import { FC } from "react";
import { Link } from "react-router-dom";
import { Movie } from "@interfaces/index";

interface MoviesCardProps {
  movie: Movie;
}

export const MoviesCard: FC<MoviesCardProps> = ({ movie }) => {
  return (
    <>
    <Link to={`/dashboard/movie/${movie.id}`} className="block">
      <div className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:scale-105 hover:border-4 hover:border-white transition-transform duration-700 ease-in-out w-full h-full">
        <img
          src={movie.image}
          alt={movie.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/5 to-black"></div>
        <div className="absolute bottom-16 left-0 right-0 p-4">
          <h3 className="text-white text-center font-bold text-xl">
            {movie.title}
          </h3>
        </div>
      </div>
    </Link>
    </>
  );
};
