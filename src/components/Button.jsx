import React, { useState } from 'react';

const FunctionalButton = () => {
  // State to track button click
  const [clicked, setClicked] = useState(false);

  // Event handler for button click
  const handleClick = () => {
    // Update the state when the button is clicked
    setClicked(true);
  };

  return (
    <div>
      {/* Display a message based on button click state */}
      <p>{clicked ? 'Button clicked!' : 'Click the button'}</p>
      
      {/* Button with the click event handler */}
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default FunctionalButton;