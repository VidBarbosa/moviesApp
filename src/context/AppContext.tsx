// Este archivo ahora solo exporta AppProvider.
import { createContext, useState, ReactNode } from 'react';
import { Movie } from '@interfaces/index';
import { AppContextType } from './useAppContext';

export const AppContext = createContext<AppContextType | undefined>(undefined);

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [movies, setMovies] = useState<Movie[]>([]);

  return (
    <AppContext.Provider value={{ movies, setMovies }}>
      {children}
    </AppContext.Provider>
  );
};
