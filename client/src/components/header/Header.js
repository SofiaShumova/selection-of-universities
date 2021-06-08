import React, { useContext } from 'react';
import { v4 as uuid } from 'uuid';

import { userContext } from '../../contexts/auth-context';
import { Link, PrivateLink } from './links';
import { roles } from '../../routes/roles';
import { schemes } from '../../pages/administration-page/schemes/schemes';

import logo from './cap.png';
import icon from './user.png';
import arrow from './arrow.svg';

import styles from './header.module.css';

const AdministrationSection = () => {
  const user = useContext(userContext);

  return (
    user?.role?.name === roles.admin && (
      <div className={styles.administration}>
        <div className={styles.administration__label}>
          Администрирование
          <img src={arrow} alt="arrow" className={styles.label__icon} />
        </div>
        <ul className={styles.administration__list}>
          {schemes.map(({ name }) => (
            <li key={uuid()} className={styles.administration__item}>
              <PrivateLink
                roles={[roles.admin]}
                to={`/administration/${name.toLowerCase()}`}
              >
                {name}
              </PrivateLink>
            </li>
          ))}
        </ul>
      </div>
    )
  );
};

const Header = () => {
  return (
    <header className={styles.wrapper}>
      <img className={styles.logo} src={logo} alt="logo icon" />
      <nav className={styles.list}>
        <Link exact to="/" title="Главная" />
        <Link to="/selection" title="Подбор ВУЗов" />
        <AdministrationSection />
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
