import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

import {
  fetchCategories
} from './actions/categories';


import AppHeader from './components/AppHeader';
import PostListView from './components/PostListView';
import PostDetail from './components/PostDetail';

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
          <Route exact path="/:category?" component={PostListView} />
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
