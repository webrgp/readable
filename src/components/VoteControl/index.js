import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as voteActions from '../../actions/vote';
import { faThumbsUp, faThumbsDown } from '@fortawesome/fontawesome-free-solid'
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import './VoteControl.css';

const propTypes = {
  entry: PropTypes.object,
  type: PropTypes.oneOf(['posts', 'comments']).isRequired
};

const defaultProps = {
  type: 'posts'
};

class VoteControl extends Component {
  
  vote = (id, option) => {
    this.props.postVote(id, option, this.props.type);
  }

  render () {

    const { entry, vote } = this.props;
    
    let score = (vote[entry.id] === undefined) ? entry.voteScore : vote[entry.id];

    return (
      <div className="VoteControl btn-group">
        <button className="btn btn-danger" 
          onClick={ () => { this.vote(entry.id, 'downVote') } }
        >
          <FontAwesomeIcon iconDefinition={faThumbsDown} flip="horizontal" />
        </button>
        <span className={ "VoteControl--entry-score " +
          ( score > 0 ? "text-success" : "text-danger" )
        }>
          {score}
        </span>
        <button className="btn btn-success"
        onClick={ () => { this.vote(entry.id, 'upVote') } }
        >
          <FontAwesomeIcon iconDefinition={faThumbsUp} />
        </button>
      </div>
    );
  }
}


VoteControl.propTypes = propTypes;
VoteControl.defaultProps = defaultProps;


const mapStateToProps  = ({ vote }, ownProps) => ({
  vote
})

export default connect(mapStateToProps, voteActions)(VoteControl)