import React, { Component } from 'react';
import { connect } from 'react-redux';
import FormSerialize from 'form-serialize';
import uuid from 'uuid';
import * as postActions from '../../actions/post';
import './PostAdd.css';

class PostAdd extends Component {

  state = {
    selectedCategory: false
  }

  selectCategory = ( event ) => {
    this.setState({ 
      selectedCategory: event.target.value 
    });
  }

  // return to previous place
  cancelPostAdd = ( event ) => {
    this.props.history.goBack();
  }

  handlePostSubmit = ( event ) => {
    event.preventDefault();
    const serializedPost = FormSerialize(event.target, {hash: true});
    const postId = uuid();
    const post = {
      ...serializedPost,
      category: this.state.selectedCategory,
      id: postId
    }
    this.props.addNewPost( post ).then( ({ p }) => {
      this.props.history.push(`/${this.state.selectedCategory}/${post.id}`);
    });
  }

  render () {

    const { categories } = this.props.categories;

    return (
      <div className="PostAdd container">
        <div className="card">
          <form onSubmit={ this.handlePostSubmit }>
            <div className="card-body">
              <h4 className="card-title mb-0">Add New Post</h4>
            </div>
            <div className="card-footer">
              <div className="form-group">
                <label htmlFor="author">Name</label>
                <input className="form-control" type="text" name="author" placeholder="Your name" required />
              </div>
              <div className="form-group">
                <label htmlFor="title">Post Title</label>
                <input className="form-control" type="text" name="title" placeholder="The next big thing is..." required />
              </div>
              <div className="form-group">
                <label htmlFor="body">Content</label>
                <textarea 
                  className="form-control" 
                  name="body"
                  rows="3"
                  required
                  placeholder="lorem ipsum..."
                ></textarea>
              </div>
              <div className="form-group">
                <label>Select Category</label>
                <div className="btn-toolbar">
                  <div className="btn-group" data-toggle="buttons">
                    { categories !== undefined && categories.map( category => (
                      <label 
                        key={category.path}
                        onClick={this.selectCategory}
                        className={ "btn btn-secondary" + ( this.state.selectedCategory === category.name ? " active" : "")}
                      >
                        <input type="radio" name="category" value={category.name} /> {category.name}
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="card-body text-right">
              <button className="card-link btn btn-outline-secondary"
                onClick={this.cancelPostAdd}
              >Cancel</button>
              <button className="card-link btn btn-primary"
                disabled={ ! this.state.selectedCategory }
              >Save Post</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps  = ({ categories }) => ({
  categories
})

export default connect(mapStateToProps, postActions)(PostAdd);