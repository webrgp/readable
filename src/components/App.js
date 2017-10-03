import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

import {
  fetchCategories
} from '../actions/categories';


import AppHeader from './AppHeader';
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
        <AppHeader categories={categories} />
        <Switch>
          <Route exact path="/new" render={() => (
              <div>New Post</div>
            )} />
          <Route exact path="/:category?" component={Dashboard} />
          <Route exact path="/:category/:id" component={PostDetail} />
        </Switch>
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
