import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav } from 'reactstrap';
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
        <Navbar light expand="sm" style={ {backgroundColor: '#e3f2fd'} }>
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
                className="btn btn-primary"
              >Add Post</NavItemLink>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default AppHeader;