import React, { useState } from 'react';
import { TestService } from '../services/api';

export const serviceContext = React.createContext();
const { Provider } = serviceContext;

export function ServiceProvider({ children, value = new TestService() }) {
  const [service, setService] = useState(value);

  return <Provider value={service}>{children}</Provider>;
}
