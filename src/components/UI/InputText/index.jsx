import React from 'react';
import './style.css';

const inputText = (props) => {
  return (
    <div class="InputText">
      {props.label &&
        <label
          className="InputText--Label"
          for={props.name}
        >
          {props.label}
        </label>}

      <input
        type="text"
        name={props.name}
        className={"InputText--Field " + props.className}
        value={props.value}
        onChange={props.handleChange}
      />
    </div>
  );
}

export default inputText;
