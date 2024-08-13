/* eslint-disable react/prop-types */
import React from "react";

const Input2 = ({ nationName, onChange, value, id }) => {
  return (
    <div className="input-field">
      <label>{nationName}</label>
      <input type="text" onChange={onChange} value={value} id={id} />
    </div>
  );
};

export default Input2;
