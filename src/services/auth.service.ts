
import { AxiosError } from 'axios';
import { authApi } from '@api/auth.api';

export interface LoginResponse {
  id:       string;
  email:    string;
  password: string;
  name:     string;
  isAvailable: boolean;
  role:     string[];
  token:    string;
  avatar:   string;
}


export class AuthService {


  static login = async( email: string, password: string):Promise<LoginResponse> => {

    try {
      const { data } = await authApi.post<LoginResponse>('/auth/login', { email, password });
      console.log(data);

      return data;

    } catch (error) {
      if ( error instanceof AxiosError ) {
        console.log(error.response?.data);
        throw new Error(error.response?.data);
      }

      console.log(error);
      throw new Error('Unable to login')
    }
  }


  static checkStatus = async():Promise<LoginResponse> => {

    try {
      const { data } = await authApi.get<LoginResponse>('/users/is-available');

      return data;

    } catch (error) {
      console.log(error);
      throw new Error('UnAuthorized');
    }
  }


}

