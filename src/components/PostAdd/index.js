import React, { Component } from 'react';
import { connect } from 'react-redux';
import FormSerialize from 'form-serialize';
import uuid from 'uuid';
import { addNewPost } from '../../actions/post';
import PostForm from '../PostForm';
import './PostAdd.css';

class PostAdd extends Component {

  handlePostSubmit = ( event ) => {
    event.preventDefault();
    const serializedPost = FormSerialize(event.target, {hash: true});
    const postId = uuid();
    const post = {
      ...serializedPost,
      id: postId
    }
    this.props.addNewPost( post ).then( ({ p }) => {
      this.props.history.push(`/${post.category}/${post.id}`);
    });
  }

  render () {

    return (
      <div className="PostAdd container">
        <div className="card">
          <PostForm 
            formHeaderTitle="Add New Post"
            onFormSubmit={this.handlePostSubmit} />
        </div>
      </div>
    );
  }
}

export default connect(null, { addNewPost })(PostAdd);