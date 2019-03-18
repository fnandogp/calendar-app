import React from 'react';
import './style.css';
import PropTypes from 'prop-types';

const inputText = (props) => {
  return (
    <div className="InputText">
      {props.label &&
        <label
          className="InputText--Label"
          htmlFor={props.name}
        >
          {props.label}
        </label>}

      <input
        type="text"
        name={props.name}
        className={"InputText--Field " + props.className}
        value={props.value}
        onChange={props.handleChange}
        disabled={props.disabled}
      />
    </div>
  );
}

inputText.propsTypes = {
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string,
  disabled: PropTypes.bool,
}

inputText.defaultProps = {
  type: 'text',
  disabled: false,
}

export default inputText;
