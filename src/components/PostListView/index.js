import React, { Component } from 'react';
import { connect } from 'react-redux';

import PostItem from '../PostItem';

import {
  fetchPosts
} from '../../actions/posts';

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

    const { posts } = this.props;
    
    return (
      <div className="container">
        {posts.length ? posts.map( post => (
          <PostItem
            key={post.id}
            post={post}
          />
        )):(
          <div>
            No posts in {this.props.match.params.category}
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