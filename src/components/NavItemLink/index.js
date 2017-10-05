import React from 'react';
import { NavLink } from 'react-router-dom';

const NavItemLink = ({filter, exact = false, className, children}) => (
  <li className="nav-item">
    <NavLink
      exact={exact}
      to={filter}
      className={ className || 'nav-link' }
    >
      {children}
    </NavLink>
  </li>
)

export default NavItemLink;