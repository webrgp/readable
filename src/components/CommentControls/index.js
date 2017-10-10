import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { removeComment } from '../../actions/comments';
import VoteControl from '../VoteControl';
import EditDeleteControls from '../EditDeleteControls';
import { fromNow } from '../../utils/helpers';

class CommentControls extends Component {
  
  handleDeleteComment = () => {
    this.props.removeComment(this.props.comment);   
  }

  handleEditComment = () => {
    this.props.editClickHandler();
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

export default withRouter(connect(null, { removeComment })(CommentControls))