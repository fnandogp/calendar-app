import React from 'react';
import './style.css';

const toolbar = (props) => {
  return (
    <div className="Toolbar">
      <div className="Toolbar--Container">
        <h1 className="Toolbar--Title">
          Calendar
        </h1>

        <button
          type="button"
          name="open-modal"
          className="Toolbar--Add"
          onClick={props.handleOpenModalClick}
        >
          Add appointment
        </button>
      </div>
    </div>
  );
}

export default toolbar;
