// Components/CategoriesComponent.js
import React from 'react';
import { useAppContext } from '../context/useAppContext';
import { Link } from 'react-router-dom';

const CategoriesComponent = () => {
  const { movies } = useAppContext();

  const categories = [...new Set(movies.map(movie => movie.category))];

  return (
    <div>
      {categories.map((category, index) => (
        <Link key={index} to={`/category/${category}`}>
          <div>{category}</div>
        </Link>
      ))}
    </div>
  );
};

export default CategoriesComponent;
