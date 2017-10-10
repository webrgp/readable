import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchCategories, selectCategory } from '../../actions/categories';

import './AppHeader.css';

class AppHeader extends Component {

  componentDidMount() {
    this.props.fetchCategories();
  }

  render () {

    const { categories } = this.props.categories;
    const routeCategory = this.props.match.params.category;
    return (
      <nav className="AppHeader flex-column flex-md-row bd-navbar navbar navbar-expand navbar-light">
        <Link 
          to='/'
          className='navbar-brand'
          alt='Readable'
        >Readable</Link>
        <div className="navbar-nav-scroll">
          <ul className="flex-row navbar-nav">
            { categories !== undefined && categories.map( category => (
              <li key={category.path} className={ 
                "nav-item" + (routeCategory === category.name ? " active" : "")
              }>
                <Link
                  className="nav-link"
                  to={`/${category.path}`}
                >{category.name}</Link>
              </li>
            ))}
            <li className="nav-item">
              <Link
                to='/new'
                className="nav-link"
              >new post</Link>
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

export default connect(mapStateToProps, { fetchCategories, selectCategory })(AppHeader);