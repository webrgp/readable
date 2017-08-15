import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as ReadableAPI from '../utils/ReadableAPI';

import {
  loadPosts
} from '../actions/posts';

class Dashboard extends Component {

  componentDidMount() {
    ReadableAPI.getPosts().then( (posts) => {
      this.props.loadPosts(posts);
    })
  }

  render () {

    const { posts } = this.props;
    
    return (
      <div>
        <h3 style={{ textTransform: 'capitalize' }}>Dashboard {this.props.match.params.category || 'all'}</h3>
        <ul>
          {posts.length ? posts.map( post => (
            <li key={post.id}>
              {post.title} ({post.category})
            </li>
          ))
          :
          (<li>No posts in {this.props.match.params.category}</li>)
          }
        </ul>
      </div>
    );
  }
}

const getFilteredPosts = (posts, filter) => {
  return filter ? posts.filter( p => p.category === filter) : posts;
};

const mapStateToProps  = (state, ownProps) => ({
  posts: getFilteredPosts(
    state.posts, 
    ownProps.match.params.category
  )
})

const mapDispatchToProps = (dispatch) => ({
  loadPosts: (data) => dispatch(loadPosts(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)