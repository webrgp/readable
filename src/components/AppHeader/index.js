import React from 'react';
import NavItemLink from '../NavItemLink';

import './AppHeader.css';

const AppHeader = (props) => (
  <nav className="AppHeader flex-column flex-md-row bd-navbar navbar navbar-expand navbar-light">
    <a className="navbar-brand" href="/">Readable</a>
    <div className="navbar-nav-scroll">
      <ul className="flex-row navbar-nav">
        {props.categories.map( category => (
          <NavItemLink
            key={category.path}
            filter={`/${category.path}`}
          >{category.name}</NavItemLink>
        ))}
        <li className="vertical-divider"></li>
        <NavItemLink
          exact
          filter='/new'
        >add post</NavItemLink>
      </ul>
    </div>
  </nav>
)

export default AppHeader;