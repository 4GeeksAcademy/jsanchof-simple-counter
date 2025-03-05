import React from "react";
import PropTypes from 'prop-types';
// fontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';

//create your first component
const Home = (props) => {
  return (
    <div className="container bg-dark">
      <div className="d-flex flex-row align-items-center justify-content-center">
        <div className="me-3" >
          <FontAwesomeIcon icon={faClock} className="text-light" size="3x" />
        </div>
        <div className="card bg-dark me-3" size="3x">
          <div className="card-text text-light" >0</div>
        </div>
        <div className="card text-light me-3">0</div>
        <div className="card text-light me-3">0</div>
        <div className="card text-light me-3">0</div>
      </div>
    </div>
  );
};


export default Home;
