import React from 'react';
import { Navigate } from 'react-router-dom';
import DashboardLayout from 'src/layouts/DashboardLayout';
import MainLayout from 'src/layouts/MainLayout';
import AccountView from 'src/views/account/AccountView';
import DownloadView from 'src/views/downloads';
import PCDMapsView from 'src/views/maps-pcd';
import LoginView from 'src/views/auth/LoginView';
import NotFoundView from 'src/views/errors/NotFoundView';
import RegisterView from 'src/views/auth/RegisterView';
import SettingsView from 'src/views/settings/SettingsView';
import AnalyticsView from 'src/views/analytics/index';
import LogIn from 'src/views/subscription/pricing/login';
import Pricing from 'src/views/subscription/pricing';
import Register from 'src/views/subscription/pricing/registration';
import MapsView from './views/maps/MapsList';
import EditMap from './views/maps/MapsList/EditMap';
import Support from './views/support/Support';

const routes = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      { path: 'account', element: <AccountView /> },
      { path: 'analytics', element: <AnalyticsView /> },
      { path: 'download', element: <DownloadView /> },
      { path: 'studio', element: <MapsView /> },
      { path: 'editMap', element: <EditMap /> },
      { path: 'pcd-maps', element: <PCDMapsView /> },
      { path: 'settings', element: <SettingsView /> },
      { path: 'support', element: <Support /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'subscription', element: <Pricing /> },
      { path: 'NewLogin', element: <LogIn /> },
      { path: 'NewRegister', element: <Register /> },
      { path: 'login', element: <LoginView /> },
      { path: 'register', element: <RegisterView /> },
      { path: 'analytics', element: <AnalyticsView /> },
      { path: '404', element: <NotFoundView /> },
      { path: '/', element: <Navigate to="/login" /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];

export default routes;
