import React from 'react';
import './style.css';

const main = (props) => {
  return (
    <div className="Main">
      <div className="Main--Container">
        {props.children}
      </div>
    </div>
  );
}

export default main;
