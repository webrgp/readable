import React from 'react';
import { faThumbsUp, faThumbsDown } from '@fortawesome/fontawesome-free-solid'
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import './VoteControl.css';

const VoteControl = (props) => (
  <div className="VoteControl btn-group">
    <button className="btn btn-danger"><FontAwesomeIcon iconDefinition={faThumbsDown} flip="horizontal" /></button>
    <span className={ "VoteControl--post-score " +
      ( props.score > 0 ? "text-success" : "text-danger" )
    }>
      {props.score}
    </span>
    <button className="btn btn-success"><FontAwesomeIcon iconDefinition={faThumbsUp} /></button>
  </div>
);

export default VoteControl;