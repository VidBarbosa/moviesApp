import { useParams, useNavigate  } from "react-router-dom";
import { useMoviesStore } from "@stores/index";
import { MoviesCard } from "@components/index";
import { IconChevronLeft } from "@tabler/icons-react";

export const SingleCategoryPage = () => {
  const navigate = useNavigate();
  const { categoryId } = useParams<{ categoryId: string }>();
  const movies = useMoviesStore((state) => state.movies);
  const filteredMovies = movies.filter(
    (movie) => movie.category === categoryId
  );

  return (
    <>
      <section className="p-4">
        <button
          onClick={() => navigate(-1)}
          className="flex gap-2 mb-6 px-4 py-2 text-white rounded hover:scale-105 transition-transform duration-300 ease-in-out"
        >
          <IconChevronLeft className="w-6 h-6" />
          Atrás
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredMovies.map((movie) => (
            <MoviesCard key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </>
  );
};
