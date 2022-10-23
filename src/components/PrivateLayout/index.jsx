import React from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import { useAuthentication } from '../../hooks/useAuth';
import { replaceRouteParams } from '../../routes/replaceRouteParams';
import { AllRoutes } from '../../routes/RouteNames';

export const PrivateLayout = ({routeList}) => {
  const { signOut } = useAuthentication();
  const {workspaceId, boardId} = useParams();

  return (
    <div>
      <h1>LAYOUT PRIVADO</h1>
      <button onClick={() => signOut()}>SignOut</button>
      <strong style={{display: "block", marginTop: "16px"}}>
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
