import { useNavigate } from 'react-router-dom';
import { useMoviesStore } from '@stores/index';
import { CardCategory } from './CardCategory';

export const CategoriesGrid = () => {
  const navigate = useNavigate();
  const movies = useMoviesStore((state) => state.movies);

  const categories = [...new Set(movies.map((movie) => movie.category))];

  const handleCategoryClick = (category: string) => {
    navigate(`/dashboard/categories/${category}`);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {categories.map((category, index) => (
        <CardCategory
          key={index}
          category={category}
          onClick={() => handleCategoryClick(category)}
        />
      ))}
    </div>
  );
};
