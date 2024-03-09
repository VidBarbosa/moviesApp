import React from 'react';
import { Movie } from "@interfaces/index";

interface MoviePosterProps {
  movie: Movie;
}

export const MoviePoster: React.FC<MoviePosterProps> = ({ movie }) => {
  return (
    <article className="w-full md:w-1/2 flex justify-center md:justify-end pt-4 md:pt-10 rounded-2xl">
      <img
        src={movie.image}
        alt={movie.title}
        className="max-w-xs md:max-w-sm lg:max-w-lg p-14 shadow-xl rounded-lg"
      />
    </article>
  );
};
