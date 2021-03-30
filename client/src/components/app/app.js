import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { UserContext, ServiceContext } from '../../contexts';
import { navigation } from '../../router/navigation';
import TestService from '../../services/TestService';

import Header from '../header/Header';
import ErrorBoundary from '../error-boundary/ErrorBoundary';

import './app.css';

const App = () => {
  const [user, setUser] = useState(null);

  const [service, setService] = useState(new TestService());
  const { Routes, links } = navigation(user);

  return (
    <ServiceContext.Provider value={service}>
      <UserContext.Provider value={user}>
        <Router>
          <div className="wrapper">
            <Header>{links}</Header>
            <ErrorBoundary>
              <Routes />
            </ErrorBoundary>
          </div>
        </Router>
      </UserContext.Provider>
    </ServiceContext.Provider>
  );
};

export default App;
