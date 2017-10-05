import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { UncontrolledNavDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class CategoryFilterDropdown extends Component {

  render () {

    const { categories } = this.props;

    return (
      <UncontrolledNavDropdown>
        <DropdownToggle nav caret>
          Dropdown
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem
            tag={ NavLink }
            exact
            to="/"
          >all</DropdownItem>
          {categories.map( category => (
            <DropdownItem
              key={category.path}
              tag={ NavLink }
              exact
              to={`/${category.path}`}
            >{category.name}</DropdownItem>
          ))}
        </DropdownMenu>
      </UncontrolledNavDropdown>
    )
  }
}

export default CategoryFilterDropdown;