import React from 'react';
import "../styles/main-page.scss";
import Canvas from './canvas';
import ComponentSidebar from './component-sidebar/component-sidebar';

function MainPage() {

  return (
    <div className="main-page">
      <ComponentSidebar />
      <Canvas />
    </div>
  )
};

export default MainPage;