import React, { useState } from 'react';
import './app.css';

import { BrowserRouter as Router } from 'react-router-dom';

import { UserContext } from '../context';
import { navigation } from '../router/navigation';
import Header from '../header/Header';

const App = () => {
  const [user, setUser] = useState(null);
  const { Routes, links } = navigation(user);

  return (
    <UserContext.Provider value={user}>
      <Router>
        <div className="wrapper">
          <Header>{links}</Header>
          <Routes />
        </div>
      </Router>
    </UserContext.Provider>
  );
};

export default App;
