import React from 'react'
import PropTypes from 'prop-types';
// fontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';

const MyCounter = () => {
  return (
    <div className="container bg-dark">
    <div className="d-flex flex-row align-items-center">
      <div className="me-3" >
        <FontAwesomeIcon icon={faClock} className="text-light" size="3x" />
      </div>
      <div className="card bg-dark me-3">
        <div className="card-body text-light">
          <h5 className="card-title">TITLE</h5>
          <p className="card-text">0</p>
        </div>
      </div>
    </div>
  </div>
)};

/*MyCounter.propTypes = {
imageUrl: PropTypes.string,
title: PropTypes.string,
};*/

export default MyCounter