import { useCallback, useContext, createContext, useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';
import { AllRoutes } from '../../routes/RouteNames';
import { api } from '../../services/api';

const tokenName = 'auth2@';

const AuthenticationContext = createContext();

export const AuthenticationProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [loadingContext, setLoadingContext] = useState(true);

  const signOut = useCallback(() => {
    localStorage.removeItem(tokenName);
    api.defaults.headers.common["Authorization"] = undefined;
    window.location.replace(AllRoutes.login.route);
  }, []);
  
  const decodeToken = useCallback((token) => {
    try {
      jwt_decode(token, { header: true });
      const jwtDecoded = jwt_decode(token);
      return {
        isValid: jwtDecoded?.exp > (new Date().getTime() + 1) / 1000,
        ...jwtDecoded
      }
    } catch {
      return {
        isValid: false
      }
    }
  }, []);

  const hasValidToken = useCallback(() => {
    const token = localStorage.getItem(tokenName);
    const data = decodeToken(token);

    return data;
  }, [decodeToken]);

  const getAuth = useCallback(() => {
    const token = localStorage.getItem(tokenName);
    const data = decodeToken(token);

    if (!data.isValid) {
      signOut();
      return window.location.replace('/');
    }

    return data;
  }, [signOut, decodeToken]);

  const signIn = async (name, pass) => {
    try {
      const {data} = await api.get(`/auth?email=${name}&password=${pass}`);
      const token = data[0]?.token;
  
      jwt_decode(token, { header: true });
      const jwtDecoded = jwt_decode(token);
      
      if (jwtDecoded?.exp > (new Date().getTime() + 1) / 1000) {
        localStorage.removeItem(tokenName);
        localStorage.setItem(tokenName, token);
        api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      }      
    } catch (error) {
      console.log(error);
    }
  };
  
  const loadUserAuthorization = async () => {
    setLoadingContext(true);
    try {
      const dataToken = hasValidToken();
      const { data } = await api.get(`/authorization?userId=${dataToken?.id}`);
  
      return data[0];
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingContext(false);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem(tokenName);

    if (token) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }

    setLoading(false);
  }, []);

  return (
    <AuthenticationContext.Provider value={{
      signIn,
      signOut,
      getAuth,
      hasValidToken,
      loadUserAuthorization,
      loading,
      loadingContext,
    }}>
      { children }
    </AuthenticationContext.Provider>
  )
};

export const useAuthentication = () => useContext(AuthenticationContext);