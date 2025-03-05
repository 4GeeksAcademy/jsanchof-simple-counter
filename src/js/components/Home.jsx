import React from "react";
import PropTypes from 'prop-types';
// fontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';

//create your first component
const Home = (props) => {
  return (
    <div className="container bg-dark ">
      <div className="d-flex flex-row align-items-center justify-content-center">
        <div className="m-3" >
          <FontAwesomeIcon icon={faClock} className="text-light" size="3x" />
        </div>
        <div className="h1 text-light m-3">{props.thousands}</div>
        <div className="h1 text-light m-3">{props.hundreads}</div>
        <div className="h1 text-light m-3">{props.tens}</div>
        <div className="h1 text-light m-3">{props.units}</div>
      </div>
    </div>
  );
};

Home.proptypes = {
  units: PropTypes.number,
  tens: PropTypes.number,
  hundreds: PropTypes.number,
  thousands: PropTypes.number
};

export default Home;
