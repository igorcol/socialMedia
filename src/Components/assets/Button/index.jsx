import React from 'react';

import './styles.css';

function Button({text}) {
  return (
      <button className="button">{text ? text : "Button"}</button>
  );
};

export default Button;
