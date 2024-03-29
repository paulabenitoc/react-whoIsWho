import React from 'react';

function Person({ img, handleClick, disabled }) {
  return (
    <img
      src={img}
      alt="Person"
      onClick={handleClick}
      style={{ pointerEvents: disabled ? 'none' : 'auto', opacity: disabled ? '0.2' : '1' }}/>
  );
}

export default Person;
