import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {replaceRouteParams} from '../../routes/replaceRouteParams';
import { AllRoutes } from '../../routes/RouteNames';
import { api } from '../../services/api';

import {
  Container
} from './styles';

export const Workspaces = () => {
  const navigate = useNavigate();
  const [workspacesList, setWorkspacesList] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleClick = (id) => {
    navigate(replaceRouteParams(AllRoutes.workspaceBoards.route, [
      {name: 'workspaceId', value: id}
    ]), id);
  }

  useEffect(() => {
    (async() => {
      const response = await api.get('/workspaces');
      setWorkspacesList(response.data);
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
