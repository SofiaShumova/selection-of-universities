import React, { useCallback, useEffect, useState } from 'react';

import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import { useRoutes } from './routes/main.routes';
import { ToastProvider } from 'react-toast-notifications';
import { Header } from './components/Header';
import { entityPages } from './structure';

function App() {
  const routes = useRoutes(entityPages);

  return (
    <Router>
      <ToastProvider>
        <div className="container">
          <Header pages={entityPages} />
          {routes}
        </div>
      </ToastProvider>
    </Router>
  );
}

export default App;
