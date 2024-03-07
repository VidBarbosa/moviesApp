import axios from 'axios';
import { useAuthStore } from '@stores/index';

const authApi = axios.create({
  baseURL: "https://api.escuelajs.co/api/v1",
});


// Todo: interceptors
// Leer el store de Zustand
authApi.interceptors.request.use(
  (config) => {

    const token = useAuthStore.getState().access_token;
    //console.log({token});

    if ( token ) {
      config.headers['Authorization'] = `Bearer ${ token }`;
    }

    return config;
  }
)

export {
  authApi
}
