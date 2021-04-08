import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { AuthProvider } from '../../contexts/auth-context';
import { ServiceProvider } from '../../contexts/service-context';

import { Routes } from '../../routes';

import Header from '../header';
import ErrorBoundary from '../error-boundary';

import './app.css';

const App = () => {
  return (
    <ServiceProvider>
      <AuthProvider>
        <Router>
          <div className="wrapper">
            <Header />
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
