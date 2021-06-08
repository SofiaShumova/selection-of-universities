import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { ToastProvider } from 'react-toast-notifications';

import { ContextWrapper } from '../../contexts/context-wrapper';

import { Routes } from '../../routes';

import Header from '../header';
import ErrorBoundary from '../error-boundary';

import './app.css';

const App = () => {
  return (
    <ContextWrapper>
      <Router>
        <div className="wrapper">
          <Header />
          <ErrorBoundary>
            <ToastProvider>
              <Routes />
            </ToastProvider>
          </ErrorBoundary>
        </div>
      </Router>
    </ContextWrapper>
  );
};

export default App;
