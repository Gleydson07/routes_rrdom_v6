import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthentication } from '../../hooks/useAuth';
import { AllRoutes } from '../../routes/RouteNames';

import {
  Container
} from './styles';

export const Login = () => {
  const navigate = useNavigate();
  const { signIn } = useAuthentication();
  const [user, setUser] = useState('gsantos@gsantos.com');
  const [password, setPassword] = useState('gsantos');

  const handleSubmitForm = async event => {
    event.preventDefault();

    await signIn(user, password);
    navigate(AllRoutes.workspaces.route);
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
