import React from 'react';
import './style.css';
import PropTypes from 'prop-types';

const inputText = ({
  label,
  type,
  name,
  className,
  value,
  handleChange,
  disabled
}) => {
  return (
    <div className="InputText">
      {label && (
        <label className="InputText--Label" htmlFor={name}>
          {label}
        </label>
      )}

      <input
        type={type}
        name={name}
        className={`InputText--Field ${className}`}
        value={value}
        onChange={handleChange}
        disabled={disabled}
      />
    </div>
  );
};

inputText.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool
};

inputText.defaultProps = {
  label: '',
  type: 'text',
  name: '',
  className: '',
  disabled: false
};

export default inputText;
