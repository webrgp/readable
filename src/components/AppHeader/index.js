import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';

import * as categoryActions from '../../actions/categories';

import './AppHeader.css';

class AppHeader extends Component {

  componentDidMount() {
    this.props.fetchCategories();
  }

  handleLinkClick = (cat) => {
    this.props.selectCategory(cat);
  }

  render () {

    const { categories } = this.props.categories;

    return (
      <nav className="AppHeader flex-column flex-md-row bd-navbar navbar navbar-expand navbar-light">
        <Link 
          to='/'
          className='navbar-brand'
          alt='Readable'
          onClick={ () => { this.handleLinkClick('none') } }
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
              >new post</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps  = ({ categories, selectedCategory }) => ({
  categories,
  selectedCategory
})

export default connect(mapStateToProps, categoryActions)(AppHeader);