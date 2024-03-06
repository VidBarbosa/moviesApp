import { Root } from '../Root';
import { createBrowserRouter } from 'react-router-dom';
import { AuthLayout, DashboardLayout } from '@layouts/index'; 
import { Dashboard, LoginPage } from '@pages/index';


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
          // {
          //   path: 'bears',
          //   element: <BearPage />
          // },
          // {
          //   path: 'person',
          //   element: <PersonPage />
          // },
          // {
          //   path: 'tasks',
          //   element: <JiraPage />
          // },
          // {
          //   path: 'wedding-invitation',
          //   element: <WeddingInvitationPage />
          // }

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

    ],
  },
] );