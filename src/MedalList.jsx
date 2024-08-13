/* eslint-disable react/prop-types */
import React from "react";

const MedalList = ({ medalData, handleDelete }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>국가</th>
          <th>금메달</th>
          <th>은메달</th>
          <th>동메달</th>
          <th>액션</th>
        </tr>
      </thead>
      <tbody>
        {medalData.map((medal, index) => {
          return (
            <tr key={index}>
              <td>{medal.nation}</td>
              <td>{medal.gold}</td>
              <td>{medal.silver}</td>
              <td>{medal.bronze}</td>
              <td>
                <button onClick={() => handleDelete(medal)}>삭제</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default MedalList;
