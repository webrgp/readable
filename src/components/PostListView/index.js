import React, { Component } from 'react';
import { connect } from 'react-redux';

import PostItem from '../PostItem';

import {
  fetchPosts
} from '../../actions/posts';

import './PostListView.css';

class PostListView extends Component {

  componentDidMount() {
    const filter = this.props.match.params.category || false;
    this.props.fetchPosts(filter);
  }

  componentWillReceiveProps(nextProps) {
    if( nextProps.match.params.category !== this.props.match.params.category ) {
      const filter = nextProps.match.params.category || false;
      this.props.fetchPosts(filter);
    }
  }

  render () {

    const { posts } = this.props.posts;   
    return (
      <div className="container">
        {posts !== undefined && posts.length ? posts.map( post => (
          <PostItem
            key={post.id}
            post={post}
          />
        )):(
          <div className="PostListView--no-posts card bg-light">
            <div className="card-body text-center">
              No posts in <em>{this.props.match.params.category}</em>
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps  = ({ posts }) => ({
  posts
})

const mapDispatchToProps = (dispatch) => ({
  fetchPosts: (data) => dispatch(fetchPosts(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(PostListView)