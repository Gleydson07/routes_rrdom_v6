import React from 'react';
import { BrowserRouter, Routes as Routers, Route } from 'react-router-dom';
import { PublicLayout } from '../components/PublicLayout';
import { AllRoutes, BoardsMenuRoutes, MainMenuRoutes } from './RouteNames';
import { PrivateRoute } from './PrivateRoute';
import { PrivateLayout } from '../components/PrivateLayout';

export const Routes = () => {
  return (
    <BrowserRouter>
      <Routers>
        <Route element={<PublicLayout />}>
          <Route exact path={AllRoutes.login.route} element={AllRoutes.login.element}/>
        </Route>

        <Route element={<PrivateRoute/>}>
          <Route path={AllRoutes.workspaces.route} element={AllRoutes.workspaces.element}/>
        </Route>

        <Route element={<PrivateLayout routeList={MainMenuRoutes}/>}>
          <Route element={<PrivateRoute />}>
            <Route path={AllRoutes.workspaceBoards.route} element={AllRoutes.workspaceBoards.element}/>
          </Route>

          <Route element={<PrivateRoute/>}>
            <Route path={AllRoutes.workspaceTeam.route} element={AllRoutes.workspaceTeam.element}/>
          </Route>

          <Route element={<PrivateRoute/>}>
            <Route path={AllRoutes.workspaceConfigTypes.route} element={AllRoutes.workspaceConfigTypes.element}/>
          </Route>
        </Route>

        <Route element={<PrivateLayout routeList={BoardsMenuRoutes}/>}>
          <Route element={<PrivateRoute />}>
            <Route path={AllRoutes.boardKambam.route} element={AllRoutes.boardKambam.element}/>
          </Route>

          <Route element={<PrivateRoute/>}>
            <Route path={AllRoutes.boardList.route} element={AllRoutes.boardList.element}/>
          </Route>

          <Route element={<PrivateRoute/>}>
            <Route path={AllRoutes.boardDashboard.route} element={AllRoutes.boardDashboard.element}/>
          </Route>

          <Route element={<PrivateRoute/>}>
            <Route path={AllRoutes.boardCustomers.route} element={AllRoutes.boardCustomers.element}/>
          </Route>

          <Route element={<PrivateRoute/>}>
            <Route path={AllRoutes.boardTeamBoard.route} element={AllRoutes.boardTeamBoard.element}/>
          </Route>

          <Route element={<PrivateRoute/>}>
            <Route path={AllRoutes.boardItemType.route} element={AllRoutes.boardItemType.element}/>
          </Route>

          <Route element={<PrivateRoute/>}>
            <Route path={AllRoutes.boardSettings.route} element={AllRoutes.boardSettings.element}/>
          </Route>

          <Route element={<PrivateRoute/>}>
            <Route path={AllRoutes.boardResearch.route} element={AllRoutes.boardResearch.element}/>
          </Route>
        </Route>
      </Routers>
    </BrowserRouter>
  )
}
