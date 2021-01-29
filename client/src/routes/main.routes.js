import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { EntityPage } from '../pages/EntityPage';
import { TrainingProgram } from '../pages/TrainingProgram';

export const useRoutes = (pages) => {
  return (
    <Switch>
      {pages.map((p, index) => (
        <Route key={index} path={p.path} exact>
          <EntityPage key={index} route={p.path} title={p.title} />
        </Route>
      ))}
      <Route key={pages.length} path="/training-program" exact>
        <TrainingProgram key={pages.length} route="/training-program" />
      </Route>
    </Switch>
  );
};
