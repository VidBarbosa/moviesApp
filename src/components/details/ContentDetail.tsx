// Components/ContentDetails.js
import React from 'react';
import { useAppContext } from '../context/useAppContext';
import { useParams } from 'react-router-dom';

const ContentDetails = () => {
  const { movies } = useAppContext();
  const { movieId } = useParams();
  
  const movie = movies.find(movie => movie.id.toString() === movieId);

  if (!movie) return <div>Película no encontrada</div>;

  return (
    <div>
      <h2>{movie.title}</h2>
      <img src={movie.image} alt={movie.title} />
      <p>{movie.summary}</p>
      <h3>Actores</h3>
      <ul>
        {movie.actors.map((actor, index) => (
          <li key={index}>{actor}</li>
        ))}
      </ul>
    </div>
  );
};

export default ContentDetails;
