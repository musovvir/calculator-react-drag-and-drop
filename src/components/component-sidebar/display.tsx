import React, { useState } from 'react';
import "../../styles/display.scss";

function Display() {
  const [digits] = useState(0);

  return (
    <div className="display">
      <div className="digits">
        {digits}
      </div>
    </div>
  )
};

export default Display;