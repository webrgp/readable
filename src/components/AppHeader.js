import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav } from 'reactstrap';
import NavItemLink from './NavItemLink';

import './AppHeader.css';

class AppHeader extends Component {

  render () {

    const { categories } = this.props;
    
    return (
      <div>
        <Navbar light expand className="navbar-app-header flex-column flex-md-row bd-navbar">
          <NavbarBrand href="/">Readable</NavbarBrand>
          <div className="navbar-nav-scroll">
            <Nav className="flex-row" navbar>

              {categories.map( category => (
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
            </Nav>
          </div>
        </Navbar>
      </div>
    );
  }
}

export default AppHeader;