import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as postActions from '../../actions/post';
import { longFormFormat, dateTimeFormat } from '../../utils/helpers';
import PostControls from '../PostControls';

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

    const { post } = this.props.post;

    return (
      <article className="PostDetail container">
        <header>
          {post && post.timestamp && (<time className="text-secondary" dateTime={ dateTimeFormat(post.timestamp)}>{ longFormFormat(post.timestamp)}</time>)}
          {post && post.title && (<h4>{post.title}</h4>)}
          {post && post.title && (
            <footer className="blockquote-footer">
              Writte by {post.author}
            </footer>
          )}
        </header>

        {post && post.body && (<div className="PostDetail--body">{post.body}</div>)}

        {post && post.id && (
          <div className="card">
            <div className="card-footer">
              <PostControls post={post} />
            </div>
          </div>
        )}

      </article>
    );
  }
}

const mapStateToProps  = ({ post }, ownProps) => ({
  post
})

export default connect(mapStateToProps, postActions)(PostDetail)