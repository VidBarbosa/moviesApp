import axios from 'axios';
import { Movie } from '@interfaces/index';

export const fetchMovies = async (): Promise<Movie[]> => {
  try {
    const { data } = await axios.get<Movie[]>('/data/movies.json');
    return data;
  } catch (error) {
    console.error('Failed to fetch movies', error);
    throw new Error('Failed to fetch movies');
  }
};
