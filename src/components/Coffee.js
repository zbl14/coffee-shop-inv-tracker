import React from "react";
import PropTypes from "prop-types";

class Coffee extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.coffee,
    };
  }

  render() {
    return (
      <React.Fragment>
        <div
          onClick={() => {
            this.props.whenCoffeeClicked(this.props.id);
          }}
        >
          <h3>Coffee Name: {this.props.name}</h3>
          <h3>Origin: {this.props.origin}</h3>
          <h3>Roast: {this.props.roast}</h3>
          <h3>Stock: {this.props.stock}</h3>
          <h3>Price: {this.props.price}</h3>
          <button onClick={() => this.props.sellCoffee(this.props.id)}>
            Sell 1-pound serving
          </button>
          <hr />
        </div>
      </React.Fragment>
    );
  }
}

Coffee.propTypes = {
  name: PropTypes.string.isRequired,
  origin: PropTypes.string,
  roast: PropTypes.string.isRequired,
  stock: PropTypes.oneOfType([
    PropTypes.number.isRequired,
    PropTypes.string.isRequired,
  ]),
  price: PropTypes.number.isRequired,
  id: PropTypes.string,
  whenCoffeeClicked: PropTypes.func,
  sellCoffee: PropTypes.func,
};

export default Coffee;
