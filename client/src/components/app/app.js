import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { AuthProvider } from '../../contexts/auth-context';
import { ServiceProvider } from '../../contexts/service-context';

import { Links, Routes } from '../../router/navigation';

import Header from '../header/header';
import ErrorBoundary from '../error-boundary/error-boundary';

import './app.css';

const App = () => {
  return (
    <ServiceProvider>
      <AuthProvider>
        <Router>
          <div className="wrapper">
            <Header>
              <Links />
            </Header>
            <ErrorBoundary>
              <Routes />
            </ErrorBoundary>
          </div>
        </Router>
      </AuthProvider>
    </ServiceProvider>
  );
};

export default App;
