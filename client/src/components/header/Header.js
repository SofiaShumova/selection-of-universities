import React from 'react';
import logo from './cap.png';
import styles from './header.module.css';

const Header = ({ children }) => {
  const createNavLink = (child) => {
    if (!child) return;
    return (
      <li className={styles.link}>
        {React.cloneElement(child, { activeClassName: styles.link_active })}
      </li>
    );
  };

  return (
    <header className={styles.wrapper}>
      <img className={styles.logo} src={logo} alt="logo icon" />
      <ul className={styles.list}>
        {React.Children.map(children.props.children, createNavLink)}
      </ul>
    </header>
  );
};

export default Header;
