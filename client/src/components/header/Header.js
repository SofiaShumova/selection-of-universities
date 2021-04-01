import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import { authContext } from '../../contexts/auth-context';

import logo from './cap.png';
import icon from './user.png';

import styles from './header.module.css';

const Header = ({ children }) => {
  const user = useContext(authContext);
  const { isExpert, isAdmin } = {
    isExpert: user ? user.isExpert : false,
    isAdmin: user ? user.isAdmin : false,
  };

  const Link = ({ title, children, ...props }) => {
    return (
      <NavLink
        className={styles.link}
        activeClassName={styles.link_active}
        {...props}
      >
        {title || children}
      </NavLink>
    );
  };

  return (
    <header className={styles.wrapper}>
      <img className={styles.logo} src={logo} alt="logo icon" />
      <nav className={styles.list}>
        <Link exact to="/" title="Главная" />
        <Link to="/selection" title="Подбор ВУЗов" />
        {isAdmin && <NavLink to="/administration">Администрирование</NavLink>}
        {isExpert && <NavLink to="/assessment">Экспертная оценка</NavLink>}
        <Link to="/about" title="О сервисе" />
        <Link to={user ? '/profile' : '/login'}>
          <img src={icon} alt="user icon" />
        </Link>
      </nav>
    </header>
  );
};

Header.propTypes = {
  children: PropTypes.node,
};

export default Header;
