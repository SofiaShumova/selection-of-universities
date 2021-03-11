import React from 'react';
import './app.css';

import { BrowserRouter as Router } from 'react-router-dom';

import { navigation } from '../router/navigation';
import Header from '../header/Header';

const isAuth = false;
const user = {
  isExpert: false,
  isAdmin: false,
};

const App = () => {
  const { Routes, links } = navigation(isAuth, user);
  return (
    <Router>
      <div className="wrapper">
        <Header>{links}</Header>
        <Routes />
      </div>
    </Router>
  );
};

export default App;
