import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuthentication } from '../../hooks/useAuth';
import { replaceRouteParams } from '../../routes/replaceRouteParams';
import { AllRoutes } from '../../routes/RouteNames';

import {
  Container
} from './styles';

export const WorkspaceBoards = () => {
  const navigate = useNavigate();
  const { workspaceId } = useParams();
  const { loadUserAuthorization } = useAuthentication();
  const [boardsList, setBoardsList] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleClick = (workspaceId,boardId) => {
    navigate(replaceRouteParams(AllRoutes.boardKambam.route, [
      {name: 'workspaceId', value: workspaceId},
      {name: 'boardId', value: boardId}
    ]));
  }

  useEffect(() => {
    (async() => {
      const {workspaces} = await loadUserAuthorization();

      const boardsIndex = workspaces.findIndex(item => item.id === +workspaceId);
      if (boardsIndex === -1) {
        navigate(AllRoutes.workspaces.route);
        return 0;
      }

      setBoardsList(workspaces[boardsIndex].boards.filter(item => item.workspaceId === +workspaceId));
      setLoading(false);
    })()
  }, [workspaceId]);

  return (
    <Container>
      <h1>WORKSPACE DETAILS - LISTA DE BOARDS</h1>

      {loading ? 
        <div>
          <span>Carregando...</span>
        </div> 
        :
        <div>
          {boardsList.length ? boardsList.map(({id, name}) => (
            <button
              style={{cursor: "pointer", margin: "8px", padding:"8px"}}
              key={id}
              onClick={() => handleClick(workspaceId, id)}
            >
              {name}
            </button>
          )): <span>Não há dados para listar.</span>}
        </div>
      }
    </Container>
  )
}
