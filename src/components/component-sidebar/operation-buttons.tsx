import React from 'react';
import "../../styles/operation-buttons.scss";

function OperationButtons() {
  return (
    <div className="operation-buttons">
      <div className="item-operation">/</div>
      <div className="item-operation">x</div>
      <div className="item-operation">-</div>
      <div className="item-operation">+</div>
    </div>
  )
};

export default OperationButtons;