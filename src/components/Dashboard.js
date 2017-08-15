import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as ReadableAPI from '../utils/ReadableAPI';

import {
  fetchPosts
} from '../actions/posts';

class Dashboard extends Component {

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
      <div>
        <h3 style={{ textTransform: 'capitalize' }}>Dashboard {this.props.match.params.category || 'all'}</h3>
        <ul>
          {posts.length ? posts.map( post => (
            <li key={post.id}>
              <Link
                to={`/${post.category}/${post.id}`}
              >
                {post.title} ({post.category})
              </Link>
            </li>
          )):(
            <li>
              No posts in {this.props.match.params.category}
            </li>
          )}
        </ul>
      </div>
    );
  }
}

const getFilteredPosts = (posts, filter) => {
  return filter ? posts.filter( p => p.category === filter) : posts;
};

const mapStateToProps  = ({ posts }, ownProps) => ({
  posts: getFilteredPosts(
    posts, 
    ownProps.match.params.category
  )
})

const mapDispatchToProps = (dispatch) => ({
  fetchPosts: (data) => dispatch(fetchPosts(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)