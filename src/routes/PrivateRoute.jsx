import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuthentication } from '../hooks/useAuth';
import { AllRoutes } from './RouteNames';

export const PrivateRoute = () => {
  const { getAuth, loading } = useAuthentication();
  const session = getAuth();
  
  if (loading) {
    return <p>Carregando...</p>
  }
  
  return session?.isValid ? (
    <Outlet/>
  ) : (
    <Navigate to={AllRoutes.login.route} />
  );
};
