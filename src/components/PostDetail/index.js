import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as postActions from '../../actions/post';
import { longFormFormat, dateTimeFormat } from '../../utils/helpers';
import PostControls from '../PostControls';
import CommentControls from '../CommentControls';

import './PostDetail.css';

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

    const { post, comments } = this.props;

    const postComments = comments[ post.id ];

    return (
      <article className="PostDetail container">
        {post && post.title && (
          <div className="card">
            <div className="card-body">
              <div className="card-subtitle">
                <h6 className="mb-0">{post.author}</h6>
                <time className="text-secondary" dateTime={ dateTimeFormat(post.timestamp)}>{ longFormFormat(post.timestamp)}</time>
              </div>
              <h4 className="card-title">{post.title}</h4>
              <div className="PostDetail--body">{post.body}</div>
            </div>

            <div className="card-footer">
              <PostControls post={post} />
            </div>

            {postComments && postComments.length && (
              <div className="mt-2">
                <div className="card-body">
                  <h6 className="card-subtitle text-muted">Comments ({postComments.length})</h6>
                </div>
                <ul className="list-group list-group-flush">
                  {postComments.map( comment => (
                    <li 
                      key={comment.id}
                      className="list-group-item"
                    >
                      <strong>{comment.author}: </strong> {comment.body}
                      <CommentControls comment={comment} />
                    </li>
                  ))}
                </ul>
              </div>
            )}

          </div>
        )}
      </article>
    );
  }
}

const mapStateToProps  = ({ post, comments }) => ({
  post, 
  comments
})

export default connect(mapStateToProps, postActions)(PostDetail)