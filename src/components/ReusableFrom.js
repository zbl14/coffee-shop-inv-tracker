import React from "react";
import PropTypes from "prop-types";

const ReusableForm = (props) => {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input type="text" name="name" placeholder="Coffee Name" />
        <input type="text" name="origin" placeholder="Origin" />
        <select name="roast">
          <option value="Light">Light</option>
          <option value="Medium">Medium</option>
          <option value="Dark">Dark</option>
        </select>
        <input
          type="number"
          name="stock"
          min="0"
          placeholder="Purchase Amount"
        />
        <input
          type="number"
          name="price"
          min="0"
          step="0.01"
          placeholder="Price"
        />
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
