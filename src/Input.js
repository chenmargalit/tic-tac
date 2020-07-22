import React, { forwardRef } from 'react';

const Input = ({ onKeyDown }, ref) => {
  return <input ref={ref} onKeyDown={onKeyDown} />;
};
const passRef = forwardRef(Input);

export default passRef;
