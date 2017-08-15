import React, { Component } from 'react';
import { connect } from 'react-redux';
import Moment from 'moment';

// import { Link } from 'react-router-dom';

import {
  fetchPost
} from '../actions/posts';

class PostDetail extends Component {

  componentDidMount() {
    const id = this.props.match.params.id || false;
    this.props.fetchPost(id);
  }

  componentWillReceiveProps(nextProps) {
    if( nextProps.match.params.id !== this.props.match.params.id ) {
      const id = this.props.match.params.id || false;
      this.props.fetchPost(id);
    }
  }

  render () {

    const { post } = this.props;

    return (
      <div>
        {post && post.title && (
          <div>
            <h3>{post.title}</h3>
            <p>{ Moment(post.timestamp).format('LL') }</p>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps  = ({ post }, ownProps) => ({
  post
})

const mapDispatchToProps = (dispatch) => ({
  fetchPost: (data) => dispatch(fetchPost(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail)