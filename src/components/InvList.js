import React from "react";
import Coffee from "./Coffee";
import PropTypes from "prop-types";

const InvList = (props) => {
  return (
    <React.Fragment>
      {props.invList.map((coffee) => (
        <Coffee
          whenCoffeeClicked={props.onCoffeeSelection}
          name={coffee.name}
          origin={coffee.origin}
          roast={coffee.roast}
          stock={coffee.stock}
          price={coffee.price}
          sellCoffee={props.sellCoffee}
          id={coffee.id}
          key={coffee.id}
        />
      ))}
    </React.Fragment>
  );
};

InvList.propTypes = {
  invList: PropTypes.array,
  onCoffeeSelection: PropTypes.func,
  sellCoffee: PropTypes.func,
};

export default InvList;
