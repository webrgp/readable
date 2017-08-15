import React from 'react';
import { NavLink } from 'react-router-dom';

const FilterLink = ({filter, exact = false, children}) => (
  <span>
    <NavLink
      exact={exact}
      to={filter}
      className='category-filter-link'
      activeStyle={{
        textDecoration: 'none',
        color: 'black'
      }}
    >
      {children}
    </NavLink>
  </span>
)

export default FilterLink;