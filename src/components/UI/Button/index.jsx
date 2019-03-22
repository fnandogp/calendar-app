import React from 'react';
import './style.css';
import PropTypes from 'prop-types';

const button = ({ type, name, className, handleClick, children }) => {
  return (
    <button
      type={type}
      name={name}
      className={`Button ${className}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

button.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string,
  handleClick: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

button.defaultProps = {
  type: 'button',
  name: '',
  className: '',
  handleClick: () => {}
};

export default button;
