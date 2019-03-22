import React from 'react';
import './style.css';
import PropTypes from 'prop-types';

const main = ({ children }) => {
  return (
    <div className="Main">
      <div className="Main--Container">{children}</div>
    </div>
  );
};

main.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default main;
