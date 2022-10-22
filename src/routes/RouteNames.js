import { BoardCustomers } from "../pages/BoardCustomers"
import { BoardDashboard } from "../pages/BoardDashboard"
import { BoardItemTypesConfiguration } from "../pages/BoardItemTypesConfiguration"
import { BoardKambam } from "../pages/BoardKambam"
import { BoardList } from "../pages/BoardList"
import { BoardResearches } from "../pages/BoardResearches"
import { BoardSettings } from "../pages/BoardSettings"
import { BoardTeamUsers } from "../pages/BoardTeamUsers"
import { Login } from "../pages/Login"
import { WorkspaceConfigTypes } from "../pages/WorkspaceConfigTypes"
import { WorkspaceBoards } from "../pages/WorkspaceBoards"
import { Workspaces } from "../pages/Workspaces"
import { WorkspaceTeams } from "../pages/WorkspaceTeams"

export const MainMenuRoutes = {
  workspaceBoards: {
    route: '/ocean/workspaces/:workspaceId/boards',
    title: 'Esteiras',
    element: <WorkspaceBoards/>
  },
  workspaceTeam: {
    route: '/ocean/workspaces/:workspaceId/team-workspace',
    title: 'Equipe',
    element: <WorkspaceTeams/>
  },
  workspaceConfigTypes: {
    route: '/ocean/workspaces/:workspaceId/item-types-configuration',
    title: 'Config. Tipo de itens',
    element: <WorkspaceConfigTypes/>
  },
}

export const BoardsMenuRoutes = {
  goBack: {
    ...MainMenuRoutes.workspaceBoards,
    title: 'Voltar',
  },
  boardKambam: {
    route: '/ocean/workspaces/:workspaceId/boards/:boardId/kambam',
    title: 'Quadro',
    element: <BoardKambam/>,
  },
  boardList: {
    route: '/ocean/workspaces/:workspaceId/boards/:boardId/list',
    title: 'Lista',
    element: <BoardList/>,
  },
  boardDashboard: {
    route: '/ocean/workspaces/:workspaceId/boards/:boardId/dashboard',
    title: 'Dashboard',
    element: <BoardDashboard/>,
  },
  boardCustomers: {
    route: '/ocean/workspaces/:workspaceId/boards/:boardId/customers',
    title: 'Clientes da esteira',
    element: <BoardCustomers/>,
  },
  boardTeamBoard: {
    route: '/ocean/workspaces/:workspaceId/boards/:boardId/team-board',
    title: 'Equipe da esteira',
    element: <BoardTeamUsers/>,
  },
  boardItemType: {
    route: '/ocean/workspaces/:workspaceId/boards/:boardId/item-type-configuration',
    title: 'Tipo de item',
    element: <BoardItemTypesConfiguration/>,
  },
  boardSettings: {
    route: '/ocean/workspaces/:workspaceId/boards/:boardId/board-settings',
    title: 'Ajustes da esteira',
    element: <BoardSettings/>,
  },
  boardResearch: {
    route: '/ocean/workspaces/:workspaceId/boards/:boardId/researches',
    title: 'Pesquisas',
    element: <BoardResearches/>,
  },
}

export const AllRoutes = {
  login: {
    route: '/',
    title: 'Login',
    element: <Login/>
  },
  workspaces: {
    route: '/ocean/workspaces',
    title: 'Dashboard',
    element: <Workspaces/>
  },
  ...MainMenuRoutes,
  ...BoardsMenuRoutes
}