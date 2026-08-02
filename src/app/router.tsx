import { createBrowserRouter } from 'react-router'

import DashboardPage from '../pages/DashboardPage'
import EmployeesPage from '../pages/EmployeesPage'
import NotFoundPage from '../pages/NotFoundPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <DashboardPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/employees',
    element: <EmployeesPage />,
  },
])