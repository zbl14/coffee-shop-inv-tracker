import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";

const ReusableForm = (props) => {
  const formStyle = {
    display: "flex",
    flexFlow: "column wrap",
    alignItems: "center",
  };

  const inputStyle = {
    width: "25%",
    padding: "12px 20px",
    margin: "8px 0",
    display: "inline-block",
    border: "1px solid #ccc",
    borderRadius: "4px",
    boxSizing: "border-box",
  };

  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const submitStyle = {
    backgroundColor: isHover ? "#45a049" : "#4CAF50",
    width: "25%",
    color: "white",
    padding: "14px 20px",
    margin: "8px 0",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  };

  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler} style={formStyle}>
        <input
          type="text"
          name="name"
          placeholder="Coffee Name"
          style={inputStyle}
        />
        <input
          type="text"
          name="origin"
          placeholder="Origin"
          style={inputStyle}
        />
        <select name="roast" style={inputStyle}>
          <option value="Light">Light</option>
          <option value="Medium">Medium</option>
          <option value="Dark">Dark</option>
        </select>
        <input
          type="number"
          name="stock"
          min="0"
          placeholder="Purchase Amount"
          style={inputStyle}
        />
        <input
          type="number"
          name="price"
          min="0"
          step="0.01"
          placeholder="Price"
          style={inputStyle}
        />
        <button
          type="submit"
          style={submitStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {props.buttonText}
        </button>
      </form>
    </React.Fragment>
  );
};

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string,
};

export default ReusableForm;
