import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavItemLink from '../NavItemLink';

import {
  fetchCategories
} from '../../actions/categories';

import './AppHeader.css';

class AppHeader extends Component {

  componentDidMount() {
    this.props.fetchCategories();
  }

  render () {

    const { categories } = this.props.categories;

    return (
      <nav className="AppHeader flex-column flex-md-row bd-navbar navbar navbar-expand navbar-light">
        <a className="navbar-brand" href="/">Readable</a>
        <div className="navbar-nav-scroll">
          <ul className="flex-row navbar-nav">
            { categories !== undefined && categories.map( category => (
              <NavItemLink
                exact
                key={category.path}
                filter={`/${category.path}`}
              >{category.name}</NavItemLink>
            ))}
            <NavItemLink
              exact
              filter='/new'
              className="nav-link"
            >add post</NavItemLink>
          </ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps  = ({ categories }) => ({
  categories
})

const mapDispatchToProps = (dispatch) => ({
  fetchCategories: (data) => dispatch(fetchCategories(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(AppHeader);