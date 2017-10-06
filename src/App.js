import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import AppHeader from './components/AppHeader';
import PostListView from './components/PostListView';
import PostDetail from './components/PostDetail';

class App extends Component {

  render() {
    return (
      <div className="app">
        <AppHeader />
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



export default withRouter(App)
