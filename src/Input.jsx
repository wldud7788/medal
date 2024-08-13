/* eslint-disable react/prop-types */
import React from "react";
import Input2 from "./Input2";

const Input = ({ handleChange, formValues }) => {
  const { nation, gold, silver, bronze } = formValues;
  return (
    <>
      <Input2
        nationName={"국가명"}
        onChange={handleChange}
        value={nation}
        id={"nation"}
      />

      <div className="input-field">
        <label>금메달</label>
        <input type="text" onChange={handleChange} value={gold} id="gold" />
      </div>
      <div className="input-field">
        <label>은메달</label>
        <input type="text" onChange={handleChange} value={silver} id="silver" />
      </div>
      <div className="input-field">
        <label>동메달</label>
        <input type="text" onChange={handleChange} value={bronze} id="bronze" />
      </div>
    </>
  );
};

export default Input;
