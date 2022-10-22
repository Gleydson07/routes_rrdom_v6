import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PrivateLayout } from '../../components/PrivateLayout';
import {replaceRouteParams} from '../../routes/replaceRouteParams';
import { AllRoutes } from '../../routes/RouteNames';

import {
  Container
} from './styles';

const workspacesList = [
  {
    id: 1,
    name: 'Atac 1',
  },
  {
    id: 2,
    name: 'Originação 2',
  },
  {
    id: 3,
    name: 'TBSLow 3',
  },
  {
    id: 4,
    name: 'Controler 4',
  },
  {
    id: 5,
    name: 'Tech 5'
  },
]

export const Workspaces = () => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(replaceRouteParams(AllRoutes.workspaceBoards.route, [
      {name: 'workspaceId', value: id}
    ]), id);
  }

  return (
    <Container>
      <h1>WORKSPACES - LIST</h1>

      <div>
        {workspacesList.map(({id, name}) => (
          <button
            style={{cursor: "pointer", marginLeft: "8px", padding:"8px"}}
            key={id}
            onClick={() => handleClick(id)}
          >
            {name}
          </button>
        ))}
      </div>
    </Container>
  )
}
