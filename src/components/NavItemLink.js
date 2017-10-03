import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavItem } from 'reactstrap';

const NavItemLink = ({filter, exact = false, className, children}) => (
  <NavItem>
    <NavLink
      exact={exact}
      to={filter}
      className={ className || 'nav-link' }
    >
      {children}
    </NavLink>
  </NavItem>
)

export default NavItemLink;