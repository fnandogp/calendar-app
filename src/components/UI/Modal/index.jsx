import React from 'react';
import './style.css';

const modal = (props) => {
  return (
    <div className={'Modal' + (props.isShown ? ' Modal__Active' : '') }>
      <div
        className="Modal--Backdrop"
        onClick={props.handleCloseModalClick}
      />

      <div className="Modal--Body">
        <div
          className="Modal--Exit"
          onClick={props.handleCloseModalClick}
        >
          ✖
        </div>

        {props.children}
      </div>
    </div>
  );
}

export default modal;
