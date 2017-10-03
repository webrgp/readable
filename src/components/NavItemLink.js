import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavItem, NavLink as BSNavLink } from 'reactstrap';

const NavItemLink = ({filter, exact = false, children}) => (
  <NavItem>
    <NavLink
      exact={exact}
      to={filter}
      className='nav-link'
    >
      {children}
    </NavLink>
  </NavItem>
)

export default NavItemLink;