import React from "react";
import PropTypes from "prop-types";

const CoffeeDetail = (props) => {
  const buttonStyle = {
    backgroundColor: "royalblue",
    width: "25%",
    color: "white",
    padding: "14px 20px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    display: "block",
    margin: "8px auto 8px auto",
    marginLeft: "auto",
    marginRight: "auto",
  };

  const { coffee, onClickingDelete } = props;
  return (
    <React.Fragment>
      <h1>Detail of {coffee.name}</h1>
      <h3>Origin: {coffee.origin}</h3>
      <h3>Roast: {coffee.roast}</h3>
      <h3>Stock: {coffee.stock}</h3>
      <h3>Price: $ {coffee.price}</h3>
      {coffee.stock > 0 ? (
        <button onClick={props.OnClickingSellCoffee} style={buttonStyle}>
          Sell 1-pound serving
        </button>
      ) : (
        <button onClick={props.OnClickingRestock} style={buttonStyle}>
          Restock
        </button>
      )}
      <button onClick={props.onClickingEdit} style={buttonStyle}>
        Edit
      </button>
      <button onClick={() => onClickingDelete(coffee.id)} style={buttonStyle}>
        Remove Coffee Sack
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
