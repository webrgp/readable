import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as commentActions from '../../actions/comments';
import { faComments } from '@fortawesome/fontawesome-free-solid'
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

const propTypes = {
  parentId: PropTypes.string
};

class CommentsCountCountrol extends Component {

  componentDidMount () {
    const parentId = this.props.parentId;
    this.props.fetchPostComments(parentId)
  }

  commentCount = (comments) => {
    return comments !== undefined ? comments.length : 0;
  }

  render () {

    const { comments, parentId } = this.props;

    const commentCount = this.commentCount( comments[parentId] );

    return (
      <div className="CommentsCountCountrol input-group mr-2">
        <span className="input-group-addon">
          <FontAwesomeIcon iconDefinition={faComments} />
        </span>
        <span className="input-group-addon bg-white">
          {commentCount}
        </span>
      </div>
    );
  }
};

CommentsCountCountrol.propTypes = propTypes;

const mapStateToProps  = ({ comments }, ownProps) => ({
  comments
})

export default connect(mapStateToProps, commentActions)(CommentsCountCountrol)