import React from 'react';

import { AuthProvider, UserProvider } from './auth-context';
import { ServiceProvider } from './service-context';

export const ContextWrapper = ({ children }) => {
  return (
    <ServiceProvider>
      <AuthProvider>
        <UserProvider>{children}</UserProvider>
      </AuthProvider>
    </ServiceProvider>
  );
};
