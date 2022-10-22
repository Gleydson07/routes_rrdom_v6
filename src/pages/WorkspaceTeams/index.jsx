import React from 'react';

import {
  Container
} from './styles';

const workspacesTeamsList = [
  {
    id: 1,
    name: 'João 1',
    email: 'João1@mail.com',
  },
  {
    id: 2,
    name: 'Maria 2',
    email: 'Maria2@mail.com',
  },
  {
    id: 3,
    name: 'José 3',
    email: 'José3@mail.com',
  },
  {
    id: 4,
    name: 'Pedro 4',
    email: 'Pedro4@mail.com',
  },
  {
    id: 5,
    name: 'Vitor 5',
    email: 'Vitor5@mail.com',
  },
]

export const WorkspaceTeams = () => {

  return (
    <Container>
      <h1>WORKSPACES - TEAMS</h1>

      <ul>
        {workspacesTeamsList.map(({id, name, email}) => (
          <li key={id}>
            <strong>{name}</strong>
            <span>{email}</span>
          </li>
        ))}
      </ul>
    </Container>
  )
}
