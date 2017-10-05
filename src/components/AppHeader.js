import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav } from 'reactstrap';
import NavItemLink from './NavItemLink';
import CategoryFilterDropdown from './CategoryFilterDropdown';

import './AppHeader.css';

class AppHeader extends Component {

  render () {

    const { categories } = this.props;
    
    return (
      <div>
        <Navbar light expand className="navbar-app-header flex-column flex-md-row bd-navbar">
          <NavbarBrand href="/">Readable</NavbarBrand>
          <Nav navbar>
            <CategoryFilterDropdown categories={categories} />
            <NavItemLink
              exact
              filter='/new'
            >add post</NavItemLink>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default AppHeader;