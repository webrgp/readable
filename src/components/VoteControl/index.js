import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { postVote } from '../../actions/vote';
import { faThumbsUp, faThumbsDown } from '@fortawesome/fontawesome-free-solid'
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
        <button className="btn btn-danger" 
          onClick={ () => { this.vote(entry, 'downVote') } }
        >
          <FontAwesomeIcon iconDefinition={faThumbsDown} flip="horizontal" />
        </button>
        <span className={ "input-group-addon bg-white " +
          ( score >= 0 ? "text-success" : "text-danger" )
        }>
          {score}
        </span>
        <button className="btn btn-success"
        onClick={ () => { this.vote(entry, 'upVote') } }
        >
          <FontAwesomeIcon iconDefinition={faThumbsUp} />
        </button>
      </div>
    );
  }
}


VoteControl.propTypes = propTypes;


const mapStateToProps  = ({ vote }, ownProps) => ({
  vote
})

export default connect(mapStateToProps, { postVote })(VoteControl)