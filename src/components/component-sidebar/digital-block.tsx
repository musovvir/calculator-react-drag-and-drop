import React from 'react';
import "../../styles/digital-block.scss";

function DigitalBlock() {
  return (
    <div className="main-block">
      <div className="digits-bloc">
        <div className="item-digit">7</div>
        <div className="item-digit">8</div>
        <div className="item-digit">9</div>
      </div>
      <div className="digits-bloc">
        <div className="item-digit">4</div>
        <div className="item-digit">5</div>
        <div className="item-digit">6</div>
      </div>
      <div className="digits-bloc">
        <div className="item-digit">1</div>
        <div className="item-digit">2</div>
        <div className="item-digit">3</div>
      </div>
      <div className="digits-bloc">
        <div className="item-digit-0">0</div>
        <div className="item-digit">,</div>
      </div>
    </div>
  )
};

export default DigitalBlock;