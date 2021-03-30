import React from 'react';
import PropTypes from 'prop-types';

import logo from './cap.png';
import styles from './header.module.css';

const Header = ({ children }) => {
  const createNavLink = (child) => {
    console.log(child);
    if (!child) return;

    return (
      <li className={styles.link}>
        {React.cloneElement(child, { activeClassName: styles.link_active })}
      </li>
    );
  };
  console.log(children);
  return (
    <header className={styles.wrapper}>
      <img className={styles.logo} src={logo} alt="logo icon" />
      <ul className={styles.list}>{children}</ul>
    </header>
  );
};

Header.propTypes = {
  children: PropTypes.node,
};

export default Header;
