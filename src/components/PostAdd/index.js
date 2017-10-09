import React, { Component } from 'react';
import './PostAdd.css';

class PostAdd extends Component {
  render () {
    return (
      <div className="PostAdd container">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Add New Post</h4>

            <form>
              <div className="form-group">
                <label for="author">Name</label>
                <input className="form-control" type="text" name="author" placeholder="Your name" required />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default PostAdd;