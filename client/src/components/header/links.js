import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { authContext } from '../../contexts/auth-context';

import styles from './header.module.css';

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

const PrivateLink = ({ roles = [], children, ...props }) => {
  const user = useContext(authContext);

  if (!roles.length) {
    return (
      <Link {...props} to={user ? props.to : '/login'}>
        {children}
      </Link>
    );
  }

  return (
    user && roles.includes(user.role) && <Link {...props}>{children}</Link>
  );
};

export { Link, PrivateLink };
