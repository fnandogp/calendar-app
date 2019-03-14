import React from 'react';
import './style.css';

const button = (props) => {
  return (
    <button
      type="button"
      name={props.name}
      className={"Button " + props.className}
      onClick={props.handleClick}
    >
      {props.children}
    </button>
  );
}

export default button;
