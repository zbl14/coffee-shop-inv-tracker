import React from "react";
import PropTypes from "prop-types";

const Coffee = (props) => {
  return (
    <React.Fragment>
      <div
        onClick={() => {
          props.whenCoffeeClicked(props.id);
        }}
      >
        <h3>Coffee Name: {props.name}</h3>
        <h3>Origin: {props.origin}</h3>
        <h3>Roast: {props.roast}</h3>
        <h3>Stock: {props.stock}</h3>
        <h3>Price: {props.price}</h3>
        <hr />
      </div>
    </React.Fragment>
  );
};

Coffee.propTypes = {
  name: PropTypes.string.isRequired,
  origin: PropTypes.string,
  roast: PropTypes.string.isRequired,
  stock: PropTypes.oneOfType([
    PropTypes.number.isRequired,
    PropTypes.oneOf(["Out of stock"]),
  ]),
  price: PropTypes.number.isRequired,
  id: PropTypes.string,
  whenCoffeeClicked: PropTypes.func,
};

export default Coffee;
