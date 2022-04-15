import React from 'react';
import DigitalBlock from './digital-block';
import Display from './display';
import EqualSign from './equal-sign';
import OperationButtons from './operation-buttons';

function ComponentSidebar() {
  return (
    <div>
      <Display />
      =======
      <OperationButtons />
      =======
      <DigitalBlock />
      =======
      <EqualSign />
    </div>
  )
};

export default ComponentSidebar;