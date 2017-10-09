import React, { Component } from 'react';
import VoteControl from '../VoteControl';
import CommentsCountCountrol from '../CommentsCountCountrol';
import EditDeleteControls from '../EditDeleteControls';
import './PostControls.css';

export default class PostControls extends Component {

  handleDeletePost = () => {
    console.log('Delete post id: ' + this.props.post.id);
  }

  handleEditPost = () => {
    console.log('Edit post id: ' + this.props.post.id);
  }

  render () {

    const { post } = this.props;

    return (
      <div className="PostControls">
        <div className="btn-toolbar">
          <VoteControl entry={ post } />
          <CommentsCountCountrol parentId={post.id} />
          <EditDeleteControls 
            onDeleteClick={ () => { this.handleDeletePost() } }
            onEditClick={ () => { this.handleEditPost() } }
          />
        </div>
      </div>
    );
  }
}