import { createBrowserRouter } from 'react-router'

import AppLayout from '../components/layout/AppLayout'

import ClientDetailPage from '../pages/ClientDetailPage'
import ClientsPage from '../pages/ClientsPage'
import DashboardPage from '../pages/DashboardPage'
import DocumentClientPage from '../pages/DocumentClientPage'
import DocumentsPage from '../pages/DocumentsPage'
import DocumentVehiclePage from '../pages/DocumentVehiclePage'
import NotFoundPage from '../pages/NotFoundPage'
import ProjectDetailPage from '../pages/ProjectDetailPage'
import ProjectsPage from '../pages/ProjectsPage'
import SchedulePage from '../pages/SchedulePage'
import TeamMemberDetailPage from '../pages/TeamMemberDetailPage'
import TeamPage from '../pages/TeamPage'
import VehicleModelDetailPage from '../pages/VehicleModelDetailPage'
import SettingsPage from '../pages/SettingsPage'
import CreateProjectPage from '../pages/CreateProjectPage'

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
        path: 'projects',
        element: <ProjectsPage />,
      },
      {
        path: 'projects/:projectId',
        element: <ProjectDetailPage />,
      },
      {
        path: 'clients',
        element: <ClientsPage />,
      },
      {
        path: 'clients/:clientId',
        element: <ClientDetailPage />,
      },
      {
        path:
          'clients/:clientId/vehicles/:vehicleModelId',
        element: <VehicleModelDetailPage />,
      },
      {
        path: 'team',
        element: <TeamPage />,
      },
      {
        path: 'team/:memberId',
        element: <TeamMemberDetailPage />,
      },
      {
        path: 'schedule',
        element: <SchedulePage />,
      },
      {
        path: 'documents',
        element: <DocumentsPage />,
      },
      {
        path: 'documents/:clientId',
        element: <DocumentClientPage />,
      },
      {
        path:
          'documents/:clientId/vehicles/:vehicleModelId',
        element: <DocumentVehiclePage />,
      },
      {
        path: 'settings',
        element: <SettingsPage />,
      },
      {
        path: 'projects/new',
        element: <CreateProjectPage />,
      },
    ],
  },
])