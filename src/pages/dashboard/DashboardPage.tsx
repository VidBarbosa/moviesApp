import { useEffect } from "react";
import { CarouselItems, CategoriesGrid } from "@components/index";
import { useMoviesStore } from '@stores/index';

export const Dashboard = () => {
  const { loadMovies } = useMoviesStore();

  useEffect(() => {
    loadMovies();
  }, [loadMovies]);

  return (
    <>
      <section className="relative w-full p-4 rounded-2xl mb-10">
        <CarouselItems />
      </section>

      <section className="mb-10 p-4">
        <h2 className="text-2xl font-semibold text-gray-300 mb-4">Todas las categorias</h2>
        <CategoriesGrid />
      </section>

    </>
  );
};
