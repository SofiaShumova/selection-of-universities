import React, { useContext } from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
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
import icon from './user.png';

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

const Links = () => {
  const user = useContext(authContext);
  const { isExpert, isAdmin } = {
    isExpert: user ? user.isExpert : false,
    isAdmin: user ? user.isAdmin : false,
  };
  return (
    <React.Fragment>
      <NavLink exact to="/">
        Главная
      </NavLink>
      <NavLink to="/selection">Подбор ВУЗов</NavLink>
      {isAdmin && <NavLink to="/administration">Администрирование</NavLink>}
      {isExpert && <NavLink to="/assessment">Экспертная оценка</NavLink>}
      <NavLink to="/about">О сервисе</NavLink>
      <NavLink to={user ? '/profile' : '/login'}>
        <img src={icon} alt="user icon" />
      </NavLink>
    </React.Fragment>
  );
};

export { Links, Routes };
