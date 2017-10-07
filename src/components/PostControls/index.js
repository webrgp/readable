import React, { Component } from 'react';
import VoteControl from '../VoteControl';
import CommentsCountCountrol from '../CommentsCountCountrol';

export default class PostControls extends Component {
  render () {

    const { post } = this.props;

    return (
      <div className="btn-toolbar">
        <CommentsCountCountrol parentId={post.id} />
        <VoteControl entry={post} />
      </div>
    );
  }
}