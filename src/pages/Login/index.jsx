import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AllRoutes } from '../../routes/RouteNames';

import {
  Container
} from './styles';

export const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState('gleydson.santos@trinusco.com.br');
  const [password, setPassword] = useState('@Teste123');

  const handleSubmitForm = async event => {
    event.preventDefault();

    if (
      user === 'gleydson.santos@trinusco.com.br' && 
      password === '@Teste123'
    ) {
      navigate(AllRoutes.workspaces.route);
    }
  };

  return (
    <Container>
      <p>Login</p>

      <form onSubmit={handleSubmitForm} noValidate>
        <input 
          type="text" 
          name="user"
          placeholder="user"
          value={user}
          onChange={e => setUser(e.target.value)}
        />
        <input 
          type="password" 
          name="password"
          placeholder="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <button type="submit">Logar</button>
      </form>
    </Container>
  )
}
