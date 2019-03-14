import React from 'react';
import './style.css';
import Button from '../Button';

const toolbar = (props) => {
  return (
    <div className="Toolbar">
      <div className="Toolbar--Container">
        <h1 className="Toolbar--Title">
          Calendar
        </h1>

        <Button
          name="open-modal"
          className="Toolbar--Add"
          handleClick={props.handleOpenModalClick}
        >
          Add appointment
        </Button>
      </div>
    </div>
  );
}

export default toolbar;
