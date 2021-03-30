import React, { useState } from 'react';

export const authContext = React.createContext();
const { Provider } = authContext;

export function AuthProvider({ children, value = null }) {
  const [auth, setAuth] = useState(value);

  return <Provider value={auth}>{children}</Provider>;
}
