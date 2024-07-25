import React from 'react';
import './image.css';

function BackgroundImage() {
  return (
    <div className="background-image-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
        alt="cryptocurrency"
        className="background-image"
      />
    </div>
  );
}

export default BackgroundImage;
