import React from 'react';
import Toolbar from 'components/UI/Toolbar';
import Main from 'components/UI/Main';
import Calendar from 'containers/Calendar';

const layout = () => {
  return (
    <React.Fragment>
      <Toolbar />

      <Main>
        <Calendar />
      </Main>
    </React.Fragment>
  );
};

export default layout;
