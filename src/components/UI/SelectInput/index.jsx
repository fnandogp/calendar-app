import React from 'react';
import './style.css';
import PropTypes from 'prop-types';

const selectInput = props => {
  return (
    <div className="SelectInput">
      {props.label &&
        <label
          className="SelectInput--Label"
          htmlFor={props.name}
        >
          {props.label}
        </label>}

      <select
        name={props.name}
        className={"SelectInput--Field " + (props.className || "")}
        value={props.value}
        onChange={props.handleChange}
        disabled={props.disabled}
      >
        {props.options.map(option => {
          return (
            <option
              key={option.value}
              value={option.value}
              disabled={option.disabled}
            >
              {option.value}
            </option>
          );
        })}
      </select>
    </div>
  );
}

selectInput.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
}

selectInput.defaultProps = {
  options: [],
  disabled: false
}

export default selectInput;
