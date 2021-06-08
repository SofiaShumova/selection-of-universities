import React from 'react';
import { v4 as uuid } from 'uuid';

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
import { schemes } from '../pages/administration-page/schemes/schemes';

import PrivateRoute from './private-route';
import { roles } from './roles';
import UniversityPage from '../pages/university-page/university-page';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route path="/selection" component={SelectionPage} />
      {schemes.map(({ name, schema }) => (
        <PrivateRoute
          key={uuid()}
          roles={[roles.admin]}
          path={`/administration/${name.toLowerCase()}`}
        >
          <AdministrationPage title={name} schema={schema} />
        </PrivateRoute>
      ))}

      <PrivateRoute
        roles={[roles.expert]}
        path="/assessment"
        component={AssessmentPage}
      />
      <Route path="/university/:id" exact component={UniversityPage}></Route>
      <Route path="/about" component={AboutPage} />
      <PrivateRoute path="/profile" component={ProfilePage} />
      <Route path="/register" component={RegisterPage} />
      <Route path="/login" component={LoginPage} />
    </Switch>
  );
};

export { Routes };
