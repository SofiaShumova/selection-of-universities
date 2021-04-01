import React, { useContext } from 'react';
import { Switch, Route } from 'react-router-dom';
import {
  MainPage,
  RegisterPage,
  SelectionPage,
  AdministrationPage,
  AssessmentPage,
  AboutPage,
  ProfilePage,
  LoginPage,
} from '../pages';
import { authContext } from '../contexts/auth-context';

const Routes = () => {
  const user = useContext(authContext);
  const { isExpert, isAdmin } = {
    isExpert: user ? user.isExpert : false,
    isAdmin: user ? user.isAdmin : false,
  };
  return (
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route path="/selection">
        <SelectionPage />
      </Route>
      {isAdmin && (
        <Route path="/administration">
          <AdministrationPage />
        </Route>
      )}
      {isExpert && (
        <Route path="/assessment">
          <AssessmentPage />
        </Route>
      )}
      <Route path="/about">
        <AboutPage />
      </Route>
      {user && (
        <Route path="/profile">
          <ProfilePage />
        </Route>
      )}
      <Route path="/login">
        <LoginPage />
      </Route>
      <Route path="/register">
        <RegisterPage />
      </Route>
    </Switch>
  );
};

export { Routes };
