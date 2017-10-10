import React, { Component } from 'react';
import { connect } from 'react-redux';
import FormSerialize from 'form-serialize';
import uuid from 'uuid';
import { fetchPost } from '../../actions/post';
import { addNewComment } from '../../actions/comments';
import { fromNow, dateTimeFormat } from '../../utils/helpers';
import PostControls from '../PostControls';
import PostComments from '../PostComments';

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

  handleNewComment = ( event ) => {
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
    const postComments = comments[ post.id ] || [];

    return (
      <article className="PostDetail container">
        {post && post.title ? (
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
              <PostComments 
                comments={postComments}
                onNewComment={this.handleNewComment}
              />
            )}

          </div>
        ) : (
          <div className="PostListView--no-posts card bg-light">
            <div className="card-body text-center">
              This post doesn't exist has been removed.
            </div>
          </div>
        )}
      </article>
    );
  }
}

const mapStateToProps  = ({ post, comments }) => ({
  post: post.post ? post.post : post,
  comments
})

export default connect(mapStateToProps, { fetchPost, addNewComment })(PostDetail)