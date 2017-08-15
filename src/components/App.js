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
import PostDetail from './PostDetail';

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
        <header>
          <h1>Readable</h1>
          <p>
            <FilterLink
              filter='/'
            >all</FilterLink>
            {categories.map( category => (
              <FilterLink
                key={category.path}
                filter={`/${category.path}`}
              >{category.name}</FilterLink>
            ))}
          </p>
        </header>
        <Route exact path="/:category?" component={Dashboard} />
        <Route exact path="/:category/:id" component={PostDetail} />
      </div>
    );
  }
}

const mapStateToProps  = ({ categories }) => ({
  categories
})

const mapDispatchToProps = (dispatch) => ({
  loadCategories: (data) => dispatch(loadCategories(data))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
