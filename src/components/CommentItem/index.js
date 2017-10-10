import React, { Component } from 'react';
import { connect } from 'react-redux';
import FormSerialize from 'form-serialize';
import { updateComment } from '../../actions/comments';
import CommentControls from '../CommentControls';

class CommentItem extends Component {

  state = {
    isEditing: false
  }

  cancelCommentEdit = ( event ) => {
    event.preventDefault();
    this.setState({
      isEditing: false
    })
  }

  showEditComment = () => {
    this.setState({
      isEditing: true
    })
  }

  handleCommentUpdate = ( event ) => {
    event.preventDefault();
    const serializedComment = FormSerialize(event.target, {hash: true});
    const updatedComment = {
      ...this.props.comment,
      ...serializedComment
    };
    this.props.updateComment(updatedComment).then( data => {
      this.setState({
        isEditing: false
      })
    });
  }

  render () {

    const { comment } = this.props;    

    return this.state.isEditing ? (
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
        <CommentControls comment={comment} editClickHandler={ this.showEditComment } />
      </li>
    );
  }
}

const mapStateToProps  = ({ editMode }) => ({
  editMode
});

export default connect(mapStateToProps, { updateComment })(CommentItem)