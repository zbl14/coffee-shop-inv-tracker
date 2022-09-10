import React from "react";
import PropTypes from "prop-types";

const CoffeeDetail = (props) => {
  const { coffee, onClickingDelete } = props;
  return (
    <React.Fragment>
      <h1>Detail of {coffee.name}</h1>
      <h3>Origin: {coffee.origin}</h3>
      <h3>Roast: {coffee.roast}</h3>
      <h3>Stock: {coffee.stock}</h3>
      <h3>Price: {coffee.price}</h3>
      {coffee.stock > 0 ? (
        <button onClick={props.OnClickingSellCoffee}>
          Sell 1-pound serving
        </button>
      ) : null}
      <button onClick={props.onClickingEdit}>Edit</button>
      <button onClick={() => onClickingDelete(coffee.id)}>
        Remove Coffee burlap sack
      </button>
    </React.Fragment>
  );
};

CoffeeDetail.propTypes = {
  coffee: PropTypes.object,
  onClickingDelete: PropTypes.func,
  OnClickingSellCoffee: PropTypes.func,
};

export default CoffeeDetail;
