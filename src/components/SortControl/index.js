import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { faLongArrowAltDown, faLongArrowAltUp } from '@fortawesome/fontawesome-free-solid'
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import * as sortActions from '../../actions/sort';

import './SortControl.css';

const SortButtonPropTypes = {
  orderby: PropTypes.string,
  criteria: PropTypes.string,
  sort: PropTypes.oneOf(['asc', 'desc']),
  onClickHandler: PropTypes.func
};

class SortButton extends Component {
  render () {
    const { orderby, sort, criteria, onClickHandler } = this.props;

    return (
      <button type="button" 
        className={ "btn " + (orderby === criteria ? "btn-primary": "btn-secondary")}
        onClick={ () => { onClickHandler(criteria, sort) } }
      >
        {orderby === criteria && (
          <FontAwesomeIcon iconDefinition={ sort === 'asc' ? faLongArrowAltUp : faLongArrowAltDown} />
        )}
        {criteria}
      </button>
    );
  }
}

SortButton.propTypes = SortButtonPropTypes;

class SortControl extends Component {

  componentDidMount() { 
    this.props.setSort('date', 'asc');
  }

  handleSortClick = (criteria, sort) => {
    this.props.setSort(criteria, sort === 'asc' ? 'desc' : 'asc');
  }

  render () {
    const { sort } = this.props;

    return (
      <div className="SortControl btn-toolbar justify-content-center">
        { sort.orderby && (
          <div className="btn-group">
            <SortButton onClickHandler={this.handleSortClick} orderby={ sort.orderby } sort={sort.sort} criteria="date" />
            <SortButton onClickHandler={this.handleSortClick} orderby={ sort.orderby } sort={sort.sort} criteria="score" />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps  = ({ sort }) => ({
  sort
})

export default connect(mapStateToProps, sortActions)(SortControl);