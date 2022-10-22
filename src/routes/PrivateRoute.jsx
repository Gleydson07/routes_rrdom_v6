import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AllRoutes } from './RouteNames';

export const PrivateRoute = () => {
  return true ? (
    <Outlet/>
  ) : (
    <Navigate to={AllRoutes.login.route} />
  );
};
