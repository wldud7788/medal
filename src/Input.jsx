/* eslint-disable react/prop-types */
import React from "react";

const Input = ({
  handleNationChange,
  nation,
  handleGoldChange,
  gold,
  handleSilverChange,
  silver,
  handleBronszeChange,
  bronze,
}) => {
  return (
    <>
      <div className="input-field">
        <label>국가명</label>
        <input type="text" onChange={handleNationChange} value={nation} />
      </div>
      <div className="input-field">
        <label>금메달</label>
        <input type="text" onChange={handleGoldChange} value={gold} />
      </div>
      <div className="input-field">
        <label>은메달</label>
        <input type="text" onChange={handleSilverChange} value={silver} />
      </div>
      <div className="input-field">
        <label>동메달</label>
        <input type="text" onChange={handleBronszeChange} value={bronze} />
      </div>
    </>
  );
};

export default Input;
