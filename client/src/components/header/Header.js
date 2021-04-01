import React from 'react';
import { Link, PrivateLink } from './links';
import PropTypes from 'prop-types';

import logo from './cap.png';
import icon from './user.png';

import styles from './header.module.css';

const Header = () => {
  return (
    <header className={styles.wrapper}>
      <img className={styles.logo} src={logo} alt="logo icon" />
      <nav className={styles.list}>
        <Link exact to="/" title="Главная" />
        <Link to="/selection" title="Подбор ВУЗов" />
        <PrivateLink roles={['ADMIN']} to="/administration">
          Администрирование
        </PrivateLink>
        <PrivateLink roles={['EXPERT']} to="/assessment">
          Экспертная оценка
        </PrivateLink>

        <Link to="/about" title="О сервисе" />
        <PrivateLink to="/profile">
          <img src={icon} alt="user icon" />
        </PrivateLink>
      </nav>
    </header>
  );
};

export default Header;
