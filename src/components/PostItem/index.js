import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PostControls from '../PostControls';
import { fromNow } from '../../utils/helpers';
import './PostItem.css';

class PostItem extends Component {
  render () {

    const { post } = this.props;

    return (
      <div className="PostItem card">
        <div className="card-body">
          <h6>{post.category}</h6>
          <Link to={`/${post.category}/${post.id}`}>
            <h4>{post.title}</h4>
          </Link>
          <footer className="blockquote-footer">
						Writte by {post.author}, { fromNow(post.timestamp)}
					</footer>
        </div>
        <div className="card-footer">
          <PostControls post={post} />
        </div>
      </div>
    );
  }
}

export default PostItem;