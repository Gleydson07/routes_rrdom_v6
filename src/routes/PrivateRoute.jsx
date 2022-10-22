import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuthentication } from '../hooks/useAuth';
import { AllRoutes } from './RouteNames';

export const PrivateRoute = () => {
  const { authenticated, loading } = useAuthentication();

  if (loading) {
    return <p>Carregando...</p>
  }

  return authenticated ? (
    <Outlet/>
  ) : (
    <Navigate to={AllRoutes.login.route} />
  );
};
