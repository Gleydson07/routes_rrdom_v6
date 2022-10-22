import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { replaceRouteParams } from '../../routes/replaceRouteParams';
import { AllRoutes } from '../../routes/RouteNames';

import {
  Container
} from './styles';


const boardsList = [
  {
    id: 1,
    name: 'Board 1',
  },
  {
    id: 2,
    name: 'Board 2',
  },
  {
    id: 3,
    name: 'Board 3',
  },
  {
    id: 4,
    name: 'Board 4',
  },
  {
    id: 5,
    name: 'Board 5'
  },
]

export const WorkspaceBoards = () => {
  const { workspaceId } = useParams();
  const navigate = useNavigate();

  const handleClick = (workspaceId,boardId) => {

    navigate(replaceRouteParams(AllRoutes.boardKambam.route, [
      {name: 'workspaceId', value: workspaceId},
      {name: 'boardId', value: boardId}
    ]));
  }

  return (
    <Container>
      <h1>WORKSPACE DETAILS - LISTA DE BOARDS</h1>

      <div>
        {boardsList.map(({id, name}) => (
          <button
            style={{cursor: "pointer", marginLeft: "8px", padding:"8px"}}
            key={id}
            onClick={() => handleClick(workspaceId, id)}
          >
            {name}
          </button>
        ))}
      </div>
    </Container>
  )
}
