import React from 'react';
import logo from '../img/cap.png';
import { NavLink } from 'react-router-dom';

import '../styles/header.css';

export const Header = ({ pages }) => {
  return (
    <header className="header">
      <img src={logo} alt="logo" className="header__logo" />
      <nav className="header__nav">
        {pages.map((p, index) => (
          <NavLink
            exact
            key={index}
            activeClassName="header__link_selected"
            className="header__link"
            to={p.path}
          >
            {p.title}
          </NavLink>
        ))}
        <NavLink
          exact
          key={pages.length}
          activeClassName="header__link_selected"
          className="header__link"
          to="/training-program"
        >
          Направления подготовки
        </NavLink>
      </nav>
    </header>
  );
};
