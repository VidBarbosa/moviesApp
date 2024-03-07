export interface Movie {
  id: string;
  title: string;
  description: string;
  category: string;
  genre?: string;
  releaseDate?: string;
  duration: string;
  rating?: number;
  director?: string;
  actors?: string[];
  poster: string;
  backdrop: string;
  trailer?: string;
  featured?: boolean;
  tags?: string[];
  status?: string;  
}