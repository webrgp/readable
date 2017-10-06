import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';

import {
  fetchCategories
} from '../../actions/categories';

import './AppHeader.css';

class AppHeader extends Component {

  componentDidMount() {
    this.props.fetchCategories();
  }

  handleLinkClick = (category) => {
    console.log(category);
  }

  render () {

    const { categories } = this.props.categories;

    return (
      <nav className="AppHeader flex-column flex-md-row bd-navbar navbar navbar-expand navbar-light">
        <Link to='/'
          className='navbar-brand'
          alt='Readable'
        >Readable</Link>
        <div className="navbar-nav-scroll">
          <ul className="flex-row navbar-nav">
            { categories !== undefined && categories.map( category => (
              <li key={category.path} className="nav-item">
                <NavLink
                  className="nav-link"
                  exact
                  to={`/${category.path}`}
                  onClick={ () => { this.handleLinkClick(category.name) } }
                >{category.name}</NavLink>
              </li>
            ))}
            <li className="nav-item">
              <NavLink
                exact
                to='/new'
                className="nav-link"
              >add post</NavLink>
            </li>
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