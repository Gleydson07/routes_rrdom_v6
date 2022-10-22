import { useCallback, useContext, createContext, useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';
import { AllRoutes } from '../../routes/RouteNames';
import { api } from '../../services/api';

const tokenName = 'auth2@';

const AuthenticationContext = createContext();

export const AuthenticationProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem(tokenName);

    if (token) {
      api.defaults.headers.common["Authorization"] = `Bearer ${JSON.parse(token)}`;
      setAuthenticated(true);
    }

    setLoading(false);
  }, []);

  const signIn = async (name, pass) => {
    const {data} = await api.get(`/auth?email=${name}&password=${pass}`);
    const token = data[0].token;

    jwt_decode(token, { header: true });
    const jwtDecoded = jwt_decode(token);

    if (jwtDecoded?.exp > (new Date().getTime() + 1) / 1000) {
      localStorage.removeItem(tokenName);
      localStorage.setItem(tokenName, JSON.stringify(token));
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      setAuthenticated(true);
    }
  };
  
  const signOut = useCallback(() => {
    setAuthenticated(false);

    localStorage.removeItem(tokenName);
    api.defaults.headers.common["Authorization"] = undefined;
    window.location.replace(AllRoutes.login.route);
  }, []);

  // const decodeToken = useCallback((token) => {
  //   try {
  //     jwt_decode(token, { header: true });
  //     const jwtDecoded = jwt_decode(token);
  //     return {
  //       isValid: jwtDecoded?.exp > (new Date().getTime() + 1) / 1000,
  //       id: jwtDecoded?.id,
  //       auth: jwtDecoded?.auth
  //     }
  //   } catch {
  //     localStorage.removeItem(tokenName);
  //     return {
  //       isValid: false
  //     }
  //   }
  // }, []);

  // const getAuthentication = useCallback(() => {}, []);

  return (
    <AuthenticationContext.Provider value={{
      signIn,
      signOut,
      loading,
      authenticated
    }}>
      { children }
    </AuthenticationContext.Provider>
  )
};

export const useAuthentication = () => useContext(AuthenticationContext);