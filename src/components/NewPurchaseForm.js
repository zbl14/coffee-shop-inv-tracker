import React from "react";
import { v4 } from "uuid";
import PropTypes from "prop-types";
import ReusableFrom from "./ReusableFrom";

const NewPurchaseForm = (props) => {
  const handleNewPurchaseFromSubmission = (event) => {
    event.preventDefault();
    props.onNewFormCreation({
      name: event.target.name.value,
      origin: event.target.origin.value,
      roast: event.target.roast.value,
      stock: event.target.stock.value,
      price: event.target.price.value,
      id: v4(),
    });
  };

  return (
    <React.Fragment>
      <ReusableFrom
        formSubmissionHandler={handleNewPurchaseFromSubmission}
        buttonText="Purchase"
      />
    </React.Fragment>
  );
};

NewPurchaseForm.propTypes = {
  onNewFormCreation: PropTypes.func,
};

export default NewPurchaseForm;
