import React, { Component } from 'react';
import { connect } from 'react-redux';
import FormSerialize from 'form-serialize';
import { fetchPost, updatePost } from '../../actions/post';
import { selectCategory } from '../../actions/categories';
import PostForm from '../PostForm';

import './PostEdit.css';

class PostEdit extends Component {

  componentDidMount() {
    const id = this.props.match.params.id || false;
    this.props.fetchPost(id);
  }

  componentWillReceiveProps(nextProps) {
    if( nextProps.match.params.id !== this.props.match.params.id ) {
      const id = nextProps.match.params.id || false;
      this.props.fetchPost(id);
    }
  }

  handlePostUpdate = ( event ) => {
    event.preventDefault();
    const serializedPost = FormSerialize(event.target, {hash: true});
    const post = {
      ...this.props.post,
      ...serializedPost
    }
    this.props.updatePost( post ).then( ({ p }) => {
      this.props.history.push(`/${post.category}/${post.id}`);
    });
  }

  render () {

    const { post } = this.props;

    return (
      <div className="PostEdit container">
        <div className="card">
          { post && post.title && (
            <PostForm 
              formHeaderTitle="Edit Post"
              post={post}
              onFormSubmit={this.handlePostUpdate} />
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps  = ({ post }) => ({
  post: post.post ? post.post : post,
})

export default connect(mapStateToProps, { fetchPost, updatePost, selectCategory })(PostEdit);