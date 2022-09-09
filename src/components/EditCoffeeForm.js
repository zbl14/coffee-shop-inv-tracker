import React from "react";
import ReusableForm from "./ReusableFrom";
import PropTypes from "prop-types";

const EditCoffeeForm = (props) => {
  const { coffee } = props;
  const handleEditCoffeeFormSubmission = (event) => {
    event.preventDefault();
    props.onEditCoffee({
      name: event.target.name.value,
      origin: event.target.origin.value,
      roast: event.target.roast.value,
      stock: parseInt(event.target.stock.value),
      price: parseInt(event.target.price.value),
      id: coffee.id,
    });
  };
  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleEditCoffeeFormSubmission}
        buttonText="Update"
      />
    </React.Fragment>
  );
};

EditCoffeeForm.propTypes = {
  coffee: PropTypes.object,
  onEditCoffee: PropTypes.func,
};

export default EditCoffeeForm;
