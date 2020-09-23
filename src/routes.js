import React from 'react';
import { Navigate } from 'react-router-dom';
import DashboardLayout from 'src/layouts/DashboardLayout';
import MainLayout from 'src/layouts/MainLayout';
import AccountView from 'src/views/account/AccountView';
import CustomerListView from 'src/views/customer/CustomerListView';
import DashboardView from 'src/views/reports/DashboardView';
import LoginView from 'src/views/auth/LoginView';
import NotFoundView from 'src/views/errors/NotFoundView';
import ProductListView from 'src/views/product/ProductListView';
import RegisterView from 'src/views/auth/RegisterView';
import SettingsView from 'src/views/settings/SettingsView';
import AnalyticsView from 'src/views/analytics/index';
import AddFloorPlan from './views/maps/floorPlan/AddFloorPlan';
import LogIn from 'src/views/subscription/pricing/login';
import Pricing from 'src/views/subscription/pricing';
import Register from 'src/views/subscription/pricing/registration';
import CreateNewMap from './views/maps/CreateNewMap';
import ListMaps from './views/maps/ListMaps';
const routes = [
  {
    path: 'app',
        element: <DashboardLayout />,
        // element: <Pricing />,
    children: [
      { path: 'account', element: <AccountView /> },
      { path: 'customers', element: <CustomerListView /> },
      { path: 'AddFloorPlan', element: <AddFloorPlan /> },
      { path: 'dashboard', element: <DashboardView /> },
      { path: 'products', element: <ProductListView /> },
      { path: 'analytics', element: <AnalyticsView /> },
      { path: 'listMaps', element: <ListMaps /> },
      { path: 'settings', element: <SettingsView /> },
      { path: '*', element: <Navigate to="/404" /> },
      { path: 'createnewmap', element: <CreateNewMap/> }

    ]
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path:'subscription',element:<Pricing/>},
      { path: 'NewLogin', element: <LogIn /> },
      { path: 'NewRegister', element: <Register /> },
      { path: 'login', element: <LoginView /> },
      { path: 'register', element: <RegisterView /> },
      { path: 'analytics', element: <AnalyticsView /> },
      { path: 'AddFloorPlan', element: <AddFloorPlan /> },
      { path: '404', element: <NotFoundView /> },
      { path: '/', element: <Navigate to="/app/dashboard" /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  
];

export default routes;
