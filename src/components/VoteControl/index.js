import React from 'react';
import { faChevronUp, faChevronDown } from '@fortawesome/fontawesome-free-solid'
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import './VoteControl.css';

const VoteControl = (props) => (
  <div className="VoteControl">
    <button><FontAwesomeIcon iconDefinition={faChevronUp} /></button>
    <span>{props.score}</span>
    <button><FontAwesomeIcon iconDefinition={faChevronDown} /></button>
  </div>
);

export default VoteControl;