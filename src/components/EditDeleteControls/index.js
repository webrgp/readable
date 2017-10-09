import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { faPencilAlt, faTrashAlt } from '@fortawesome/fontawesome-free-solid'
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import './EditDeleteControls.css';

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
      <div className="EditDeleteControls mr-0 ml-auto">
        <button 
          className="btn"
          onClick={ onEditClick }
        ><FontAwesomeIcon iconDefinition={faPencilAlt} /></button>
        <button 
          className="btn"
          onClick={ onDeleteClick }
        ><FontAwesomeIcon iconDefinition={faTrashAlt} /></button>
      </div>
    );
  }
}

EditDeleteControls.propTypes = propTypes;

export default EditDeleteControls;