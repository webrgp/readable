import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import NavItemLink from './NavItemLink';

class AppHeader extends Component {
  
  state = {
    isOpen: false
  }

  toggle = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen
    }));
  }

  render () {

    const { categories } = this.props;
    
    return (
      <div>
        <Navbar color="primary" dark expand="sm">
          <NavbarBrand href="/">Readable</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>

              <NavItemLink
                exact
                filter='/'
              >all</NavItemLink>

              {categories.map( category => (
                <NavItemLink
                  key={category.path}
                  filter={`/${category.path}`}
                >{category.name}</NavItemLink>
              ))}

              <NavItemLink
                exact
                filter='/new'
              >Add Post</NavItemLink>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default AppHeader;