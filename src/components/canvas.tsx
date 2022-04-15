import React from 'react';
import "../styles/canvas.scss"

function Canvas() {
  return (
    <div className="canvas">
      <div className="text-block">
        <div className="title">
          Перетащите сюда
        </div>
        <div className="text">
          любой элемент из левой панели
        </div>
      </div>
    </div>
  )
};

export default Canvas;