import React from 'react';
import './style.css';
import PropTypes from 'prop-types';

const selectInput = ({
  label,
  name,
  className,
  value,
  options,
  handleChange,
  disabled
}) => {
  return (
    <div className="SelectInput">
      {label && (
        <label className="SelectInput--Label" htmlFor={name}>
          {label}
        </label>
      )}

      <select
        name={name}
        className={`SelectInput--Field ${className || ''}`}
        value={value}
        onChange={handleChange}
        disabled={disabled}
      >
        {options.map(option => {
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
};

selectInput.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      disabled: PropTypes.bool
    })
  ),
  handleChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool
};

selectInput.defaultProps = {
  label: '',
  name: '',
  className: '',
  options: [],
  disabled: false
};

export default selectInput;
