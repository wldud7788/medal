/* eslint-disable react/prop-types */
import React from "react";

const Button = ({ handleSubmit, handleUpdate }) => {
  return (
    <div className="button-group">
      <button type="submit" onClick={handleSubmit}>
        국가 추가
      </button>
      <button type="button" onClick={handleUpdate}>
        업데이트
      </button>
    </div>
  );
};

export default Button;
