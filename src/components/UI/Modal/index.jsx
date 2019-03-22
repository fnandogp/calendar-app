import React from 'react';
import './style.css';
import PropTypes from 'prop-types';

const modal = ({ isShown, handleCloseModalClick, children }) => {
  return (
    <div className={`Modal${isShown ? ' Modal__Active' : ''}`}>
      <div
        className="Modal--Backdrop"
        role="dialog"
        aria-modal="true"
        onClick={handleCloseModalClick}
      />

      <div className="Modal--Body">
        <button
          type="button"
          className="Modal--Exit"
          onClick={handleCloseModalClick}
        >
          ✖
        </button>

        {children}
      </div>
    </div>
  );
};

modal.propTypes = {
  isShown: PropTypes.bool,
  handleCloseModalClick: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

modal.defaultProps = {
  isShown: false
};

export default modal;
