import { createBrowserRouter } from 'react-router-dom'

import App from 'App'
import Concept from 'pages/Concept'
import Explore from 'pages/Explore'
import Faculty from 'pages/Faculty'
import FacultyDetails from 'pages/Faculty/FacultyDetails'
import Institution from 'pages/Institution'
import Venue from 'pages/Venue'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/explore',
        element: <Explore />,
        children: [
          {
            path: 'faculty',
            element: <Faculty />,
            children: [
              {
                path: ':id',
                element: <FacultyDetails />
              }
            ]
          },
          {
            path: 'institution',
            element: <Institution />
            // children: [
            //   {
            //     path: 'login',
            //     element: <LoginPage />
            //   }
            // ]
          },
          {
            path: 'venue',
            element: <Venue />
            // children: [
            //   {
            //     path: 'login',
            //     element: <LoginPage />
            //   }
            // ]
          },
          {
            path: 'concept',
            element: <Concept />
            // children: [
            //   {
            //     path: 'login',
            //     element: <LoginPage />
            //   }
            // ]
          }
        ]
      }
    ]
  }
])
