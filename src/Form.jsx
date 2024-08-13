/* eslint-disable react/prop-types */
import React from "react";
import Button from "./Button.jsx";
import Input from "./Input.jsx";

const Form = ({
  handleNationChange,
  nation,
  handleGoldChange,
  gold,
  handleSilverChange,
  silver,
  handleBronszeChange,
  bronze,
  handleSubmit,
  handleUpdate,
}) => {
  return (
    <form className="input-group">
      <Input
        handleNationChange={handleNationChange}
        nation={nation}
        handleGoldChange={handleGoldChange}
        gold={gold}
        handleSilverChange={handleSilverChange}
        silver={silver}
        handleBronszeChange={handleBronszeChange}
        bronze={bronze}
      />
      <Button handleSubmit={handleSubmit} handleUpdate={handleUpdate} />
    </form>
  );
};

export default Form;
