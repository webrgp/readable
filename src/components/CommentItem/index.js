import React, { Component } from 'react';
import CommentControls from '../CommentControls';

class CommentItem extends Component {
  render () {

    const { comment } = this.props;
    
    return (
      <li 
        key={comment.id}
        className="list-group-item"
      >
        <strong>{comment.author}: </strong> {comment.body}
        <CommentControls comment={comment} />
      </li>
    );
  }
}

export default CommentItem