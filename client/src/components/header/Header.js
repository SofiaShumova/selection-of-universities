import React from 'react';
import { Link, PrivateLink } from './links';
import { roles } from '../../routes/roles';

import PropTypes from 'prop-types';

import logo from './cap.png';
import icon from './user.png';
import arrow from './arrow.svg';

import styles from './header.module.css';

const Header = () => {
  return (
    <header className={styles.wrapper}>
      <img className={styles.logo} src={logo} alt="logo icon" />
      <nav className={styles.list}>
        <Link exact to="/" title="Главная" />
        <Link to="/selection" title="Подбор ВУЗов" />
        <div className={styles.administration}>
          <input className={styles.checkbox} type="checkbox" />
          <div className={styles.administration__label}>
            Администрирование
            <img src={arrow} alt="arrow" className={styles.label__icon} />
          </div>
          <ul className={styles.administration__list}>
            <li className={styles.administration__item}>
              <PrivateLink
                roles={[roles.admin]}
                to="/administration/university"
              >
                University
              </PrivateLink>
            </li>
          </ul>
        </div>
        <PrivateLink roles={[roles.expert]} to="/assessment">
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
