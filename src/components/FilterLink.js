import React from 'react';
import { NavLink } from 'react-router-dom';

const FilterLink = ({filter, children}) => (
  <span>
    <NavLink
      exact
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