/* eslint-disable react/prop-types */
import React from "react";
import Button from "./Button.jsx";
import Input from "./Input.jsx";

const Form = ({ formValues, handleChange, handleSubmit, handleUpdate }) => {
  return (
    <form className="input-group">
      <Input formValues={formValues} handleChange={handleChange} />
      <Button handleSubmit={handleSubmit} handleUpdate={handleUpdate} />
    </form>
  );
};

export default Form;
