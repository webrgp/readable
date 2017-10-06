import React, { Component } from 'react';
import VoteControl from '../VoteControl';

export default class PostControls extends Component {
  render () {

    const { post } = this.props;

    return (
      <div className="btn-toolbar">
        <VoteControl score={post.voteScore} />
      </div>
    );
  }
}