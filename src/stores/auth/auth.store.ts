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
  fetchUserProfile: () => Promise<void>;
  logoutUser: () => void;
}


const storeApi: StateCreator<AuthState> = ( set, get ) => ( {

  status: 'pending',
  access_token: undefined,
  user: undefined,


  loginUser: async ( email: string, password: string ) => {

    try {
      const { access_token } = await AuthService.login( email, password );
      set( { status: 'authorized', access_token } );
      await get().fetchUserProfile();

    } catch ( error ) {
      set( { status: 'unauthorized', access_token: undefined } );
    }

  },

  fetchUserProfile: async () => {
    try {
      const userProfile = await AuthService.profileUser();
      set({ user: userProfile });
    } catch (error) {
      console.error('Error fetching user profile', error);
    }
  },

  checkAuthStatus: async () => {

    try {
      const { access_token } = await AuthService.checkStatus();
      set( { status: 'authorized', access_token } );

    } catch ( error ) {
      set( { status: 'unauthorized', access_token: undefined } );
    }
  },


  logoutUser: () => {
    set( { status: 'unauthorized', access_token: undefined } );
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