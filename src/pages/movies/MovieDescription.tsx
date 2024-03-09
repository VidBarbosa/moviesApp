import React from "react";
import { Movie } from "@interfaces/index";
import { IconPlayerPlay, IconPlus, IconShare } from "@tabler/icons-react";

interface MovieDescriptionProps {
  movie: Movie;
}

export const MovieDescription: React.FC<MovieDescriptionProps> = ({
  movie,
}) => {
  return (
    <article className="w-full md:w-1/2 flex flex-col justify-end mb-6">
      <h1 className="text-4xl font-bold text-white mb-6">{movie.title}</h1>
      <div className="flex gap-2 mb-6">
        <button className="bg-white hover:bg-gray-200 text-black border-2 font-bold py-4 px-6 rounded flex gap-2 cursor-pointer transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl">
          <IconPlayerPlay />
          Ver ahora
        </button>
        <button className="bg-black/60 hover:bg-black text-white border-2 border-white font-bold py-4 px-6 rounded flex gap-2 cursor-pointer transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl">
          <IconPlayerPlay />
          Ver trailer
        </button>
        <button className="bg-black/60 hover:bg-black text-white border-2 border-white font-bold py-2 px-4 rounded-full cursor-pointer transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl">
          <IconPlus />
        </button>
        <button className="bg-black/60 hover:bg-black text-white border-2 border-white font-bold py-2 px-4 rounded-full cursor-pointer transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl">
          <IconShare />
        </button>
      </div>
      <aside className="flex gap-3 mb-4">
        <div>
          Category: <span className="font-semibold">{movie.category}</span>
        </div>
        <div>
          Actors:{" "}
          <span className="font-semibold">{movie.actors.join(", ")}</span>
        </div>
      </aside>
      <p className="mb-4 text-lg">{movie.summary}</p>
    </article>
  );
};
