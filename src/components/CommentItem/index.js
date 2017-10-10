import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleEditMode } from '../../actions/editMode';
import CommentControls from '../CommentControls';

class CommentItem extends Component {

  cancelCommentEdit = ( event ) => {
    event.preventDefault();
    this.props.toggleEditMode(this.props.comment.id);
  }

  handleCommentUpdate = ( event ) => {
    event.preventDefault();
    console.log(event.target);
  }

  render () {

    const { comment, editMode } = this.props;    

    return editMode[comment.id] ? (
      <li 
        key={comment.id}
        className="CommentItem list-group-item bg-light"
      >
        <form 
          className="mb-2" 
          ref={(commentUpdateForm) => this.commentUpdateForm = commentUpdateForm}
          onSubmit={ this.handleCommentUpdate }
        >
          <div className="form-group">
            <input 
              className="form-control" 
              type="text" 
              name="author" 
              placeholder="Your name" 
              defaultValue={comment.author}
              required 
            />
          </div>
          <div className="form-group">
            <textarea 
              className="form-control" 
              name="body"
              rows="3"
              placeholder="Your comment"
              defaultValue={comment.body}
              required
            />
          </div>
          <div className="text-right">
            <button className="card-link btn btn-outline-secondary"
              onClick={this.cancelCommentEdit}
            >Cancel</button>
            <button className="card-link btn btn-primary">Save Changes</button>
          </div>
        </form>
      </li>
    ) : 
    (
      <li 
        key={comment.id}
        className="CommentItem list-group-item"
      >
        <strong>{comment.author}: </strong> {comment.body}
        <CommentControls comment={comment} />
      </li>
    );
  }
}

const mapStateToProps  = ({ editMode }) => ({
  editMode
});

export default connect(mapStateToProps, {toggleEditMode})(CommentItem)