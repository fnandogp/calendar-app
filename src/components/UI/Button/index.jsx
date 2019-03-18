import React from 'react';
import './style.css';
import PropTypes from 'prop-types';

const button = (props) => {
  return (
    <button
      type={props.type}
      name={props.name}
      className={"Button " + props.className}
      onClick={props.handleClick}
    >
      {props.children}
    </button>
  );
}

button.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  handleClick: PropTypes.func,
}

button.defaultProps = {
  type: 'button',
}

export default button;
