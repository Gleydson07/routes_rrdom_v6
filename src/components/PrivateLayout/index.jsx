import React from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import { replaceRouteParams } from '../../routes/replaceRouteParams';
import { AllRoutes } from '../../routes/RouteNames';

export const PrivateLayout = ({routeList}) => {
  const {workspaceId, boardId} = useParams();

  return (
    <div>
      <h1>LAYOUT PRIVADO</h1>
      <strong>
        Volta para lista de 
        <NavLink to={AllRoutes.workspaces.route}> WORSKPACES </NavLink>
      </strong>
      <nav>
        {Object.values(routeList).map(({route, title}) => 
          <li key={title}>
            <NavLink to={replaceRouteParams(route, 
              [
                {name: 'workspaceId', value: workspaceId},
                {name: 'boardId', value: boardId},
              ]
            )}>
              {title}
            </NavLink>
          </li>
        )}
      </nav>
      <Outlet/>
    </div>
  )
}
