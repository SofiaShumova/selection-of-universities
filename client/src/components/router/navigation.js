import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import MainPage from '../../pages/MainPage';
import SelectionPage from '../../pages/SelectionPage';
import AdministrationPage from '../../pages/AdministrationPage';
import AssessmentPage from '../../pages/AssessmentPage';
import AboutPage from '../../pages/AboutPage';
import ProfilePage from '../../pages/ProfilePage';
import LoginPage from '../../pages/LoginPage';
import icon from './user.png';

export const navigation = ({ isAuth, user: isExpert, isAdmin }) => {
  const links = (
    <React.Fragment>
      <NavLink exact to="/">
        Главная
      </NavLink>
      <NavLink to="/selection">Подбор ВУЗов</NavLink>
      {isAdmin && <NavLink to="/administration">Администрирование</NavLink>}
      {isExpert && <NavLink to="/assessment">Экспертная оценка</NavLink>}
      <NavLink to="/about">О сервисе</NavLink>
      <NavLink to={isAuth ? '/profile' : '/login'}>
        <img src={icon} alt="user icon" />
      </NavLink>
    </React.Fragment>
  );

  const routes = (
    <Switch>
      <Route exact path="/">
        <MainPage />
      </Route>
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
      <Route path={isAuth ? '/profile' : '/login'}>
        {isAuth ? <ProfilePage /> : <LoginPage />}
      </Route>
    </Switch>
  );
  return { routes, links };
};
