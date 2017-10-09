import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { faPencilAlt, faTrashAlt } from '@fortawesome/fontawesome-free-solid'
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

/**
 * entry can be either a post or a commnent
 */
const propTypes = {
  onDeleteClick: PropTypes.func.isRequired,
  onEditClick: PropTypes.func.isRequired
};

class EditDeleteControls extends Component {
  render () {
    const { onDeleteClick, onEditClick } = this.props;

    return (
      <div className="PostControls--edit-remove mr-0 ml-auto">
        <button 
          className="btn btn-light"
          onClick={ onEditClick }
        ><FontAwesomeIcon iconDefinition={faPencilAlt} /></button>
        <button 
          className="btn btn-light"
          onClick={ onDeleteClick }
        ><FontAwesomeIcon iconDefinition={faTrashAlt} /></button>
      </div>
    );
  }
}

EditDeleteControls.propTypes = propTypes;

export default EditDeleteControls;