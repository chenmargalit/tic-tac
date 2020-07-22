import React from 'react';

const Square = ({ value, whenClicked }) => {
  return (
    <button
      onClick={whenClicked}
      style={{ width: 150, height: 150, background: 'white', fontSize: 40 }}
    >
      {value}
    </button>
  );
};

export default Square;
