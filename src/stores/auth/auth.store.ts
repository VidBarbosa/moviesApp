import { StateCreator, create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import type { AuthStatus, User } from '@interfaces/index';
import { AuthService } from '@services/auth.service';



export interface AuthState {

  status: AuthStatus;
  access_token?: string;
  user?: User;

  loginUser: ( email: string, password: string ) => Promise<void>;
  checkAuthStatus: () => Promise<void>;
  logoutUser: () => void;
}


const storeApi: StateCreator<AuthState> = ( set, get ) => ( {

  status: 'pending',
  access_token: undefined,
  user: undefined,


  loginUser: async ( email: string, password: string ) => {

    try {
      const { access_token, ...user } = await AuthService.login( email, password );
      set( { status: 'authorized', access_token, user } );

    } catch ( error ) {
      set( { status: 'unauthorized', access_token: undefined, user: undefined } );
      throw 'Unauthorized';
    }

  },

  checkAuthStatus: async () => {

    try {
      const { access_token, ...user } = await AuthService.checkStatus();
      set( { status: 'authorized', access_token, user } );

    } catch ( error ) {
      set( { status: 'unauthorized', access_token: undefined, user: undefined } );
    }
  },

  profileUser: async () => {

    try {  
      const { access_token } = await AuthService.profileUser( get().access_token! );
      set( { access_token } );

    } catch ( error ) {
      set( { status: 'unauthorized', access_token: undefined, user: undefined } );
    }
  },

  
  logoutUser: () => {
    set( { status: 'unauthorized', access_token: undefined, user: undefined } );
  }

} );


export const useAuthStore = create<AuthState>()(
  devtools(
    persist(
      storeApi,
      { name: 'auth-storage' }
    )
  )
);