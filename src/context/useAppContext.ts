import { useContext } from 'react';
import { AppContext } from './AppContext';
import { Movie } from '@interfaces/index';

export interface AppContextType {
  movies: Movie[];
  setMovies: React.Dispatch<React.SetStateAction<Movie[]>>;
}


export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
}
