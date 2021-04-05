import React from 'react';
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

import PrivateRoute from './private-route';
import { roles } from './roles';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route path="/selection" component={SelectionPage} />
      <PrivateRoute
        roles={[roles.admin]}
        path="/administration"
        component={AdministrationPage}
      />
      <PrivateRoute
        roles={[roles.expert]}
        path="/assessment"
        component={AssessmentPage}
      />
      <Route path="/about" component={AboutPage} />
      <PrivateRoute path="/profile" component={ProfilePage} />
      <Route path="/register" component={RegisterPage} />
    </Switch>
  );
};

export { Routes };
