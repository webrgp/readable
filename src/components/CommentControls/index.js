import React, { Component } from 'react';
import VoteControl from '../VoteControl';

class CommentControls extends Component {
  render () {

    const { comment } = this.props;

    return (
      <div className="CommentControls">
        <VoteControl entry={ comment } />
      </div>
    );
  }
};

export default CommentControls;