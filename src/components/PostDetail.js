import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';

import {
  fetchPosts
} from '../actions/posts';

class PostDetail extends Component {

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

    const { post } = this.props;
    
    return (
      <div>
        {post && post.title && (
          <h3>{post.title}</h3>
        )}
      </div>
    );
  }
}

const mapStateToProps  = ({ posts }, ownProps) => ({
  post: posts.filter( p => p.id === ownProps.match.params.id)[0]
})

const mapDispatchToProps = (dispatch) => ({
  fetchPosts: (data) => dispatch(fetchPosts(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail)