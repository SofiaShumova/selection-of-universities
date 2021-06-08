import React, { useState } from 'react';
import { Service } from '../services/api';

export const serviceContext = React.createContext();
const { Provider } = serviceContext;

export function ServiceProvider({ children, value = new Service() }) {
  const [service] = useState(value);

  return <Provider value={service}>{children}</Provider>;
}
