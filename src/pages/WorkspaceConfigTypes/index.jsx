import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PrivateLayout } from '../../components/PrivateLayout';
import {replaceRouteParams} from '../../routes/replaceRouteParams';
import { AllRoutes } from '../../routes/RouteNames';

import {
  Container
} from './styles';


export const WorkspaceConfigTypes = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <h1>WORKSPACES - CONFIG TYPES</h1>

      <p>PÁGINA DEFASADA</p>

    </Container>
  )
}
