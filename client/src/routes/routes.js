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
import { universitySchema } from '../pages/administration-page/schemes';

import PrivateRoute from './private-route';
import { roles } from './roles';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route path="/selection" component={SelectionPage} />
      <PrivateRoute roles={[roles.admin]} path="/administration/university">
        <AdministrationPage schema={universitySchema} />
      </PrivateRoute>
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
