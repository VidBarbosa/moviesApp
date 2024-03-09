import axios from 'axios';

const moviesApi = {
  async fetchMovies() {
    const response = await axios.get('/data/movies.json');
    return response.data;
  }
};

export { moviesApi };
