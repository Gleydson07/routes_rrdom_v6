import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {replaceRouteParams} from '../../routes/replaceRouteParams';
import { AllRoutes } from '../../routes/RouteNames';
import { useAuthentication } from '../../hooks/useAuth';

import {
  Container
} from './styles';

export const Workspaces = () => {
  const navigate = useNavigate();
  const { loadUserAuthorization } = useAuthentication();
  const [workspacesList, setWorkspacesList] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleClick = (id) => {
    navigate(replaceRouteParams(AllRoutes.workspaceBoards.route, [
      {name: 'workspaceId', value: id}
    ]));
  }

  useEffect(() => {
    (async() => {
      const { workspaces } = await loadUserAuthorization();
      setWorkspacesList(workspaces);
      setLoading(false);
    })()
  }, [])

  return (
    <Container>
      <h1>WORKSPACES - LIST</h1>

      {loading ? 
        <div>
          <span>Carregando...</span>
        </div>
        :
        <div>
          {workspacesList.length ? workspacesList.map(({id, name}) => (
            <button
              style={{cursor: "pointer", margin: "8px", padding:"8px"}}
              key={id}
              onClick={() => handleClick(id)}
            >
              {name}
            </button>
          )) : <span>Não há dados para listar.</span>}
        </div>
      }

    </Container>
  )
}
