import React, { useState } from 'react';
import Toolbar from '../../components//UI/Toolbar';
import Main from '../../components/UI/Main';
import Calendar from '../Calendar';

const layout = (props) => {
  // States
  const [isShown, setIsShown] = useState(false);

  // Handlers
  const handleOpenModalClick = () => {
    setIsShown(true);
  }

  const handleCloseModalClick = () => {
    setIsShown(false);
  }

  return (
    <React.Fragment>
      <Toolbar
        handleOpenModalClick={handleOpenModalClick}
      />

      <Main>
        <Calendar
          isShown={isShown}
          handleCloseModalClick={handleCloseModalClick}
        />
      </Main>
    </React.Fragment>
  );
}

export default layout;
