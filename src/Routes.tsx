import { FC } from 'react';
import type { RouteObject } from 'react-router-dom';
import { useRoutes, Navigate } from 'react-router-dom';
import Login from './pages/auth/Login';
import AuthLayout from './pages/AuthLayout';
import EntityDetail from './pages/basic/EntityDetail';
import EntityOverview from './pages/basic/EntityOverview';
import Index from './pages/basic/Index';
import NotFound from './pages/basic/NotFound';
import BasicLayout from './pages/BasicLayout';

export const LOGIN_ROUTE = '/auth/login';
export const ENTITY_OVERVIEW_ROUTE = '/entity';
export const ENTITY_DETAIL_ROUTE = '/entity/:id';

const routeObjects: RouteObject[] = [
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      { index: true, element: <Navigate to={LOGIN_ROUTE} /> },
      { path: LOGIN_ROUTE, element: <Login /> },
      { path: '*', element: <Navigate to={LOGIN_ROUTE} /> },
    ],
  },
  {
    path: '/',
    element: <BasicLayout />,
    children: [
      { index: true, element: <Index /> },
      { path: ENTITY_OVERVIEW_ROUTE, element: <EntityOverview /> },
      { path: ENTITY_DETAIL_ROUTE, element: <EntityDetail /> },
      { path: '*', element: <NotFound /> },
    ],
  },
];

const Routes: FC = () => useRoutes(routeObjects);

export default Routes;
