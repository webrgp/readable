import React, { Component } from 'react';
import VoteControl from '../VoteControl';
import EditDeleteControls from '../EditDeleteControls';
import { fromNow } from '../../utils/helpers';

class CommentControls extends Component {

  handleDeleteComment = () => {
    console.log('Delete comment id: ' + this.props.comment.id);
  }

  handleEditComment = () => {
    console.log('Edit comment id: ' + this.props.comment.id);
  }

  render () {

    const { comment } = this.props;

    return (
      <div className="CommentControls btn-toolbar">
        <VoteControl entry={ comment } />

        <div className="CommentsCountCountrol input-group">
          <span className="input-group-addon"><small>{ fromNow(comment.timestamp)}</small></span>
        </div>

        <EditDeleteControls 
          onDeleteClick={ () => { this.handleDeleteComment() } }
          onEditClick={ () => { this.handleEditComment() } }
        />
      </div>
    );
  }
};

export default CommentControls;