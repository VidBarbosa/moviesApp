import { Root } from '../Root';
import { createBrowserRouter } from 'react-router-dom';
import { AuthLayout, DashboardLayout } from '@layouts/index'; 
import { Dashboard, LoginPage, SingleCategoryPage, SingleMoviePage, NotFoundPage } from '@pages/index';


export const router = createBrowserRouter( [
  {
    path: '/',
    element: <Root />,
    children: [
      /// Dashboard Routes
      {
        path: 'dashboard',
        element: <DashboardLayout />,
        children: [
          {
            path: '',
            element: <Dashboard />
          },
          {
            path: 'categories/:categoryId',
            element: <SingleCategoryPage />,
          },
          {
            path: 'movie/:movieId',
            element: <SingleMoviePage />,
          },
        ]
      },

      /// Auth Routes
      {
        path: 'auth',
        element: <AuthLayout />,
        children: [
          {
            path: 'login',
            element: <LoginPage />
          }
        ]

      },

      /// Not Found
      { path: '*', element: <NotFoundPage /> }

    ],
  },
] );