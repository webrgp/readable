import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import AppHeader from './components/AppHeader';
import PostListView from './components/PostListView';
import PostDetail from './components/PostDetail';

class App extends Component {

  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path="/" component={AppHeader} />
          <Route path="/:category?" component={AppHeader} />
        </Switch>
        <Switch>
          <Route exact path='/' component={PostListView} />
          <Route exact path="/new" render={() => (
            <div>New Post</div>
          )} />
          <Route exact path="/:category" component={PostListView} />
          <Route exact path="/:category/:id" component={PostDetail} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App)
