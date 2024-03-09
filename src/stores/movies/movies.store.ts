import { create } from 'zustand';
import { fetchMovies } from '@services/movies.service';
import { Movie } from '@interfaces/index';

interface MoviesState {
  movies: Movie[];
  loadMovies: () => Promise<void>;
}

export const useMoviesStore = create<MoviesState>((set) => ({
  movies: [],
  loadMovies: async () => {
    const movies = await fetchMovies();
    set({ movies });
  },
}));

