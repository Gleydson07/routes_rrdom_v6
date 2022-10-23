import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthentication } from '../../hooks/useAuth';
import { AllRoutes } from '../../routes/RouteNames';

import {
  Container
} from './styles';

export const Login = () => {
  const navigate = useNavigate();
  const { signIn, hasValidToken } = useAuthentication();
  const [user, setUser] = useState('cxavier@xavier.com');
  const [password, setPassword] = useState('calebe');

  const handleSubmitForm = async event => {
    event.preventDefault();

    await signIn(user, password);
    navigate(AllRoutes.workspaces.route);
  };

  useEffect(() => {
    const dataToken = hasValidToken();
    
    if (dataToken?.isValid) {
      navigate(AllRoutes.workspaces.route);
    }
  }, [hasValidToken, navigate]);

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
