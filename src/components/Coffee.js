import React from "react";
import PropTypes from "prop-types";

const Coffee = (props) => {
  return (
    <React.Fragment>
      <h3>Coffee Name: {props.name}</h3>
      <h3>Origin: {props.origin}</h3>
      <h3>Roast: {props.roast}</h3>
      <h3>Stock: {props.stock}</h3>
      <h3>Price: {props.price}</h3>
      <hr />
    </React.Fragment>
  );
};

Coffee.propTypes = {
  name: PropTypes.string.isRequired,
  Origin: PropTypes.string,
  Roast: PropTypes.string.isRequired,
  Stock: PropTypes.number.isRequired,
  Price: PropTypes.number.isRequired,
};

export default Coffee;
