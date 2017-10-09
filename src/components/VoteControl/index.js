import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { postVote } from '../../actions/vote';
import { faChevronUp, faChevronDown } from '@fortawesome/fontawesome-free-solid'
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import './VoteControl.css';

/**
 * entry can be either a post or a commnent
 */
const propTypes = {
  entry: PropTypes.object
};

class VoteControl extends Component {
  
  vote = (entry, option) => {
    const type = entry.hasOwnProperty('parentId') ? 'comments' : 'posts';
    this.props.postVote(entry.id, option, type);
  }

  render () {

    const { entry, vote } = this.props;
    let score = (vote[entry.id] === undefined) ? entry.voteScore : vote[entry.id];

    return (
      <div className="VoteControl btn-group">
        <button className="btn" 
          onClick={ () => { this.vote(entry, 'downVote') } }
        >
          <FontAwesomeIcon iconDefinition={faChevronDown} flip="horizontal" />
        </button>
        <span className="input-group-addon">{score}</span>
        <button className="btn"
        onClick={ () => { this.vote(entry, 'upVote') } }
        >
          <FontAwesomeIcon iconDefinition={faChevronUp} />
        </button>
      </div>
    );
  }
}

VoteControl.propTypes = propTypes;

const mapStateToProps  = ({ vote }, ownProps) => ({
  vote
});

export default connect(mapStateToProps, { postVote })(VoteControl)