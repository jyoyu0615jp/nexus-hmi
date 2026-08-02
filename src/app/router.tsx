import { createBrowserRouter } from 'react-router'

import AppLayout from '../components/layout/AppLayout'
import DashboardPage from '../pages/DashboardPage'
import EmployeesPage from '../pages/EmployeesPage'
import NotFoundPage from '../pages/NotFoundPage'

export const router = createBrowserRouter([
  
  
   {
    path: '/',
    element: <AppLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: 'employees',
        element: <EmployeesPage />,
      },
    ],
  },
])