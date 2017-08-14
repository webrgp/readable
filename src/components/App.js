import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import * as ReadableAPI from '../utils/ReadableAPI';

import {
  loadCategories
} from '../actions/categories';


import FilterLink from './FilterLink';
import Dashboard from './Dashboard';

class App extends Component {

  componentDidMount() {
    ReadableAPI.getCategories().then( (categories) => {
      this.props.loadCategories(categories);
    })
  }

  render() {
    const { categories } = this.props;
    return (
      <div className="app">
        <ul>
          <li>
            <FilterLink
              filter='/'
            >all</FilterLink>
          </li>
          {categories.map( category => (
            <li key={category.path}>
              <FilterLink
                filter={`/${category.path}`}
              >{category.name}</FilterLink>
            </li>
          ))}
        </ul>
        <Route exact path="/:category?" component={Dashboard} />
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    categories: state.categories
  }
}

function mapDispatchToProps (dispatch) {
  return {
    loadCategories: (data) => dispatch(loadCategories(data))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
