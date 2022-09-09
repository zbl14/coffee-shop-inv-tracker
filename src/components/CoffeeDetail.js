import React from "react";
import PropTypes from "prop-types";

const CoffeeDetail = (props) => {
  const { coffee } = props;
  return (
    <React.Fragment>
      <h1>Detail of {coffee.name}</h1>
      <h3>Origin: {coffee.origin}</h3>
      <h3>Roast: {coffee.roast}</h3>
      <h3>Stock: {coffee.stock}</h3>
      <h3>Price: {coffee.price}</h3>
    </React.Fragment>
  );
};

CoffeeDetail.propTypes = {
  merch: PropTypes.object,
};

export default CoffeeDetail;
