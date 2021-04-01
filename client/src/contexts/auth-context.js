import React, { useState } from 'react';
import Auth from '../services/api/auth-service';

export const authContext = React.createContext();
const { Provider } = authContext;

export function AuthProvider({ children, value = null }) {
  const [auth, setAuth] = useState(new Auth().getUser());

  return <Provider value={auth}>{children}</Provider>;
}
