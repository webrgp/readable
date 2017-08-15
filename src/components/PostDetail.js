import React, { Component } from 'react';
import { connect } from 'react-redux';

// import { Link } from 'react-router-dom';

import {
  fetchPost,
  fetchComments
} from '../actions/posts';

class PostDetail extends Component {

  componentDidMount() {
    const id = this.props.match.params.id || false;
    this.props.fetchPost(id);
    this.props.fetchComments(id);
  }

  componentWillReceiveProps(nextProps) {
    if( nextProps.match.params.id !== this.props.match.params.id ) {
      const id = this.props.match.params.id || false;
      this.props.fetchPost(id);
      this.props.fetchComments(id);
    }
  }

  render () {

    const { post, comments } = this.props;

    return (
      <div>
        {post && post.title && (
          <div>
            <h3>{post.title}</h3>
            <p>{post.timestamp}</p>
          </div>
        )}

        {comments.length ? (
          <div>
            <h4>Comments ({comments.length})</h4>

            {comments.map( comment => (
              <div key={comment.id}>
                Author: {comment.author}<br />
                Datetime: {comment.timestamp}<br />
                Body: {comment.body}<br />
                Votes: {comment.voteScore}<br />
                <hr/>
              </div>
            ))}

          </div>
        ):(
          <div>
            <h4>No Comments</h4>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps  = ({ post, comments }, ownProps) => ({
  post,
  comments
})

const mapDispatchToProps = (dispatch) => ({
  fetchPost: (data) => dispatch(fetchPost(data)),
  fetchComments: (data) => dispatch(fetchComments(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail)