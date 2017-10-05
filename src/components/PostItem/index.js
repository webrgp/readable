import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import VoteControl from '../VoteControl';

import './PostItem.css';

class PostItem extends Component {
  render () {

    const { post } = this.props;

    return (
      <div className="PostItem">
        <VoteControl score={post.voteScore} />
        <div className="PostItem--summary">
          <h6>{post.category}</h6>
          <Link to={`/${post.category}/${post.id}`}>
            <h3>{post.title}</h3>
          </Link>
        </div>
      </div>
    );
  }
}

export default PostItem;