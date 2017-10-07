import React, { Component } from 'react';
import VoteControl from '../VoteControl';
import CommentsCountCountrol from '../CommentsCountCountrol';
import { faPencilAlt, faTrashAlt } from '@fortawesome/fontawesome-free-solid'
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import './PostControls.css';

export default class PostControls extends Component {

  handleDeletePost = () => {
    console.log('Delete post id: ' + this.props.post.id);
  }

  render () {

    const { post } = this.props;

    return (
      <div className="PostControls">
        <div className="btn-toolbar">
          <CommentsCountCountrol parentId={post.id} />
          <VoteControl entry={ post } />
          <div className="PostControls--edit-remove mr-0 ml-auto">
            <button className="btn btn-light"><FontAwesomeIcon iconDefinition={faPencilAlt} /></button>
            <button 
              className="btn btn-light"
              onClick={ () => { this.handleDeletePost() } }
            ><FontAwesomeIcon iconDefinition={faTrashAlt} /></button>
          </div>
        </div>
      </div>
    );
  }
}