import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';

import { authContext } from '../contexts/auth-context';

const PrivateRoute = ({
  roles = [],
  children,
  component: Component,
  ...props
}) => {
  const user = useContext(authContext);

  if (!user) {
    return <Redirect to="/login" />;
  }
  const access = !roles.length || roles.includes(user.role);
  const display = Component ? <Component /> : children;

  return (
    <Route {...props}>
      {access ? (
        display
      ) : (
        <div>Пожалуйста, войдите в систему как {roles.toString()}</div>
      )}
    </Route>
  );
};
export default PrivateRoute;
