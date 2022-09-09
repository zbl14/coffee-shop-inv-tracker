import React from "react";
import PropTypes from "prop-types";

const ReusableForm = (props) => {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input type="text" name="name" placeholder="Coffee Name" />
        <input type="text" name="origin" placeholder="Origin" />
        <input type="text" name="roast" placeholder="light/medium/dark" />
        <input type="number" name="stock" placeholder="Purchase Amount" />
        <input type="number" name="price" placeholder="Price" />
        <button type="submit">{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
};

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string,
};

export default ReusableForm;
