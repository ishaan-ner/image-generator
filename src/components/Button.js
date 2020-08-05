import React from "react";

const Button = ({ handleClick }) => {
  return (
    <div className="button-container">
      <button className="btn" id="refresh-button" onClick={handleClick}>
        Refresh Pattern
      </button>
    </div>
  );
};

export default Button;
