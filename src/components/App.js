import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

import {
  fetchCategories
} from '../actions/categories';


import FilterLink from './FilterLink';
import Dashboard from './Dashboard';
import PostDetail from './PostDetail';

class App extends Component {

  componentDidMount() {
    this.props.fetchCategories();
  }

  render() {
    const { categories } = this.props;
    return (
      <div className="app">
        <header>
          <h1>Readable</h1>
          <p>
            <FilterLink
              exact
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
  fetchCategories: (data) => dispatch(fetchCategories(data))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
