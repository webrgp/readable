import React, { Component } from 'react';
import VoteControl from '../VoteControl';
import { fromNow } from '../../utils/helpers';

class CommentControls extends Component {
  render () {

    const { comment } = this.props;

    return (
      <div className="CommentControls btn-toolbar">
        <VoteControl entry={ comment } />

        <div className="CommentsCountCountrol input-group">
          <span className="input-group-addon">{ fromNow(comment.timestamp)}</span>
        </div>
      </div>
    );
  }
};

export default CommentControls;