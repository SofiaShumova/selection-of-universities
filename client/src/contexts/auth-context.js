import React, { useState, useEffect } from 'react';
import Auth from '../services/api/auth-service';

export const authContext = React.createContext();
export const userContext = React.createContext();

const AUTH = new Auth();

export function AuthProvider({ children, value = null }) {
  const [auth] = useState(AUTH);
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export function UserProvider({ children, value = null }) {
  const [user, setUser] = useState(AUTH.user);
  useEffect(() => {
    AUTH.addObserver(setUser);

    return () => AUTH.removeObserver(setUser);
  }, []);
  return <userContext.Provider value={user}>{children}</userContext.Provider>;
}
