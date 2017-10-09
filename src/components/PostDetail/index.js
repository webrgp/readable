import React, { Component } from 'react';
import { connect } from 'react-redux';
import FormSerialize from 'form-serialize';
import uuid from 'uuid';
import { fetchPost } from '../../actions/post';
import { addNewComment } from '../../actions/comments';
import { fromNow, dateTimeFormat } from '../../utils/helpers';
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

  // Sort by date asc
  sortCommentsByDate = ( comments ) => {
    if( comments !== undefined ) {
      return comments.sort((a, b) => a.timestamp > b.timestamp);
    } else {
      return comments;
    }
  }

  handleCommentSubmit = ( event ) => {
    event.preventDefault();
    const postId = this.props.post.id;
    const serializedComment = FormSerialize(event.target, {hash: true});
    const commentId = uuid();
    const comment = {
      ...serializedComment,
      id: commentId,
      parentId: postId
    }
    this.props.addNewComment(comment);
  }

  render () {

    const { post, comments, history } = this.props;

    const postComments = comments[ post.id ];

    return (
      <article className="PostDetail container">
        {post && post.title && (
          <div className="card">
            <div className="card-body">
              <div className="card-subtitle">
                <h6 className="mb-0">{post.author}</h6>
                <time className="text-secondary" dateTime={ dateTimeFormat(post.timestamp)}>{ fromNow(post.timestamp)}</time>
              </div>
              <h4 className="card-title">{post.title}</h4>
              <div className="PostDetail--body">{post.body}</div>
            </div>

            <div className="card-footer">
              <PostControls post={post} history={history} />
            </div>

            {postComments && (
              <div className="mt-2">
                <div className="card-body">
                  <h6 className="card-subtitle text-muted">Comments ({postComments.length})</h6>
                </div>
                <ul className="list-group list-group-flush">
                  { this.sortCommentsByDate(postComments).map( comment => (
                    <li 
                      key={comment.id}
                      className="list-group-item"
                    >
                      <strong>{comment.author}: </strong> {comment.body}
                      <CommentControls comment={comment} />
                    </li>
                  ))}
                  <li className="list-group-item bg-light">
                    <h6 className="mb-4 mt-2">Add your comment:</h6>
                    <form 
                      className="mb-2" 
                      onSubmit={ this.handleCommentSubmit }
                      ref={(commentForm) => this.commentForm = commentForm}
                    >
                      <div className="form-group">
                        <input className="form-control" type="text" name="author" placeholder="Your name" required />
                      </div>
                      <div className="form-group">
                        <textarea 
                          className="form-control" 
                          name="body"
                          rows="3"
                          placeholder="Your comment"
                          required
                        ></textarea>
                      </div>
                      <button className="card-link btn btn-primary">Add Comment</button>
                    </form>
                  </li>
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

export default connect(mapStateToProps, { fetchPost, addNewComment })(PostDetail)