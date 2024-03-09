// Components/ContentCategory.js
import React from 'react';
import { useAppContext } from '../context/useAppContext';
import { useParams, Link } from 'react-router-dom';

const SingleCategory = () => {
  const { movies } = useAppContext();
  const { categoryName } = useParams(); // Asegúrate de que el parámetro coincida con el definido en tus rutas

  const filteredMovies = movies.filter(movie => movie.category === categoryName);

  return (
    <div>
      {filteredMovies.map((movie, index) => (
        <div key={index}>
          <Link to={`/movie/${movie.id}`}>
            <img src={movie.image} alt={movie.title} />
            <h3>{movie.title}</h3>
          </Link>
          <p>{movie.summary}</p>
        </div>
      ))}
    </div>
  );
};

export default ContentCategory;
