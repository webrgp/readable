import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import './PostForm.css';

class PostForm extends Component {

  state = {
    author: "",
    title: "",
    body: "",
    category: ""
  }

  componentDidMount() {
    if( this.props.post !== undefined ) {
      this.setState({
        author: this.props.post.author,
        title: this.props.post.title,
        body: this.props.post.body,
        category: this.props.post.category
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    if( nextProps.post !== undefined ) {
      this.setState({
        author: nextProps.post.author,
        title: nextProps.post.title,
        body: nextProps.post.body,
        category: nextProps.post.category
      });
    }
  }

  selectCategory = ( event ) => {
    this.setState({ 
      category: event.target.value 
    });
  }

  // return to previous place
  cancelPostAdd = ( event ) => {
    event.preventDefault();
    if ( this.props.history.action === 'PUSH')
      this.props.history.goBack()
    else
      this.props.history.push("/");
  }

  handleInputChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  render () {

    const { onFormSubmit, formHeaderTitle } = this.props;
    const { categories } = this.props.categories;

    return (
      <form className="PostForm" onSubmit={ onFormSubmit }>
        <div className="card-body">
          <h4 className="card-title mb-0">{ formHeaderTitle }</h4>
        </div>
        <div className="card-footer">
          <div className="form-group">
            <label htmlFor="author">Name</label>
            <input 
              className="form-control" 
              type="text" 
              name="author" 
              placeholder="Your name" 
              value={this.state.author}
              onChange={ e => this.handleInputChange(e) }
              required />
          </div>
          <div className="form-group">
            <label htmlFor="title">Post Title</label>
            <input 
              className="form-control" 
              type="text" 
              name="title" 
              value={this.state.title}
              placeholder="The next big thing is..." 
              onChange={ e => this.handleInputChange(e) }
              required />
          </div>
          <div className="form-group">
            <label htmlFor="body">Content</label>
            <textarea 
              className="form-control" 
              name="body"
              rows="3"
              value={this.state.body}
              placeholder="lorem ipsum..."
              onChange={ e => this.handleInputChange(e) }
              required
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
                    className={ "btn btn-secondary" + ( this.state.category === category.name ? " active" : "")}
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
            disabled={ ! this.state.category }
          >Save Post</button>
        </div>
      </form>
    );
  }
}

const mapStateToProps  = ({ categories }) => ({
  categories
});

export default withRouter(connect(mapStateToProps)(PostForm));